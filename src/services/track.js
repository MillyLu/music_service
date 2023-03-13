import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const trackApi = createApi({
    reducerPath: "tracks",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://painassasin.online/catalog/track/",
       /* prepareHeaders: ( headers, {getState} ) => {
            if(getState().auth.access != null) {const {tok} = getState().auth.access;
            if(tok) {headers.set('authorization', `Bearer ${tok}`)};                  
        }
            return headers} */
        }
    ),

    endpoints: (builder) => ({
        getAllTracks: builder.query({
            query: () => `all`,
            refetchOnWindowFocus: false,
        }),
        getTrackById: builder.query({
            query: (id) => `${id}`,
          }),
    })
});

export const { useGetAllTracksQuery, useGetTrackByIdQuery } = trackApi;

