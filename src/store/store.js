import { configureStore} from '@reduxjs/toolkit';
import { trackApi } from '../services/track';
// import { setupListeners } from "@reduxjs/toolkit/query";

import { userApi } from '../services/user';
import authReducer from './state';



export const store = configureStore({
    
    reducer: {
        auth: authReducer,
        [userApi.reducerPath]: userApi.reducer,
        [trackApi.reducerPath]: trackApi.reducer,
    },

    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(userApi.middleware).concat(trackApi.middleware),
})





