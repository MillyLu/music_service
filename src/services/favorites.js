import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const FAVOR_TAGS = 'Favorite'
const FAVOR_TAGS = { type: "Favorite", id: "id" }

export const favoritesApi = createApi({
    reducerPath: 'favorites',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://painassasin.online/catalog/track/",
            prepareHeaders: ( headers, {getState} ) => {
                const rootState = getState();
                const tok = rootState.auth.access;
            // if(getState().auth.access != null) {const {tok} = getState().auth.access;
            if(tok) {headers.set('authorization', `Bearer ${tok}`)}; 
            console.log(tok);   
            return headers}               
        
            

    }),
    tagTypes: [FAVOR_TAGS],

    endpoints: (builder) => ({
        getFavorites: builder.query({
            query: () => ({
                url: 'favorite/all/',
                method: 'GET'
            }),
            refetchOnWindowFocus: false,
            providesTags: [FAVOR_TAGS]
           /*  providesTags: (result=[]) => 
            result 
            ? [
         ...result.map(({ id }) => ({ type: FAVOR_TAGS, id })),
         FAVOR_TAGS,
            ] : [FAVOR_TAGS], */
        }), 

        addFavorites: builder.mutation({
            query: (id) => ({
                url: `${id}/favorite/`,
                method: "POST",
            }),
            invalidatesTags: [FAVOR_TAGS],
        }),

        deleteFavorites: builder.mutation({
            query: (id) => ({
                url: `${id}/favorite/`,
                method: "DELETE",
            }),
             invalidatesTags: [FAVOR_TAGS],
           // invalidatesTags: (post) => [{ type: FAVOR_TAGS.type, id: post?.id }],
        })
    }),


})


export const { useGetFavoritesQuery, useAddFavoritesMutation, useDeleteFavoritesMutation} = favoritesApi