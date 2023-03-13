import { configureStore} from '@reduxjs/toolkit';
import { trackApi } from '../services/track';

// import { setupListeners } from "@reduxjs/toolkit/query";
import { selectionsApi } from '../services/selections';
import { userApi } from '../services/user';
import { favoritesApi } from '../services/favorites';
import authReducer from './state';
import trackReducer from './trackSlice'



export const store = configureStore({
    
    reducer: {
        auth: authReducer,
        track: trackReducer,
        [userApi.reducerPath]: userApi.reducer,
        [trackApi.reducerPath]: trackApi.reducer,
        [favoritesApi.reducerPath]: favoritesApi.reducer,
        [selectionsApi.reducerPath]: selectionsApi.reducer,
    },

    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(userApi.middleware).concat(trackApi.middleware).concat(favoritesApi.middleware).concat(selectionsApi.middleware),
})





