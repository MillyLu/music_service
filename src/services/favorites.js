import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const favoritesApi = createApi({
    reducerPath: "favorites",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://painassasin.online/catalog/track/",
                 /* prepareHeaders: ( headers, {getState} ) => {
            if(getState().auth.access != null) {const {tok} = getState().auth.access;
            if(tok) {headers.set('authorization', `Bearer ${tok}`)};                  
        }
            return headers} */

    }),

    endpoints: (builder) => ({
        getAllFavorites: builder.query({
            query: "favorite/all/",
            refetchOnWindowFocus: false,
        }),

        addFavotites: builder.mutation({
            query: (id) => ({
                url: `${id}/favorite/`,
                method: "POST"
            })
        })
    }),


})


export const { useGetAllFavoritesQuery} = favoritesApi