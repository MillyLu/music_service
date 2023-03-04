import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const selectionsApi = createApi({
    reducerPath: "selections",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://painassasin.online/catalog/selection/",
        prepareHeaders: ( headers, {getState} ) => {
            if(getState().auth.access != null) {const {tok} = getState().auth.access;
            if(tok) {headers.set('authorization', `Bearer ${tok}`)};                  
        }
            return headers} 
        }
    ),

    endpoints: (builder) => ({
        getSelectionsById: builder.query({
            query: (id) => `${id}`,
          }),
    })
});

export const { useGetSelectionsByIdQuery } = selectionsApi;