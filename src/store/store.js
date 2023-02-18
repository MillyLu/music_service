import { configureStore} from '@reduxjs/toolkit';
// import { setupListeners } from "@reduxjs/toolkit/query";

import { userApi } from '../services/user';
import authReducer from './state';



export const store = configureStore({
    
    reducer: {
        auth: authReducer,
        [userApi.reducerPath]: userApi.reducer,
    },

    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(userApi.middleware),
})





