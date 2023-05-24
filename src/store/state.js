/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice} from "@reduxjs/toolkit";
 // PayloadActions 

const initialState = {
    token: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            // const { access, refresh } = payload;
            state.token = action.payload.token;
            localStorage.setItem('toki', action.payload.token);
        },
        defaultState: (state) => {
            state = initialState;
        },
    }
    });

export const { setUser, defaultState } = authSlice.actions;
export default authSlice.reducer;

export const authSelector = (store) => store.auth;
    
