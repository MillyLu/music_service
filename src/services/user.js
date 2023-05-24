import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://painassasin.online/user",
        prepareHeaders: (headers, { getState }) => {
            if(getState().auth.token != null) {const {tok} = getState().auth.token;
            if(tok) {headers.set('authorization', `Bearer ${tok}`)};                  
        }
            return headers} 
    }),      

    endpoints: (builder) => ({
        signupUser: builder.mutation({
            query: (body) => ({
                url: "signup/",
                method: "POST",
                body,
            }),
        }),
        loginUser: builder.mutation({
            query: (body) => ({
                url: "login/",
                method: "POST",
                body,
            })
        }),
        getUserToken: builder.mutation({
            query: (body) => ({
                url: "token/",
                method: "POST",
                body,
            })
        }),
        refreshUserToken: builder.mutation({
            query: (body) => ({

                url: "token/refresh/",
                method: "POST",
                /* headers:{
                    'Content-Type': 'application/json'
                  }, */
                body,
            })
        })
    })  
});

export const {useSignupUserMutation, useLoginUserMutation, useGetUserTokenMutation, useRefreshUserTokenMutation } = userApi;

