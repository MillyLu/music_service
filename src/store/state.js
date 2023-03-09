/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice} from "@reduxjs/toolkit";
 // PayloadActions 

const initialState = {
    refresh: null,
    access: null,

};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
         setUser: (state, {payload}) => {
            const { access, refresh } = payload
            state.refresh = refresh;
            state.access = access;
            localStorage.setItem('refresh', refresh);
            console.log(localStorage.getItem('refresh'));
        }, 

        deleteUser: (state) => {
            state.refresh = initialState.refresh;
            state.access = initialState.access;
            localStorage.removeItem('refresh');
        },
        
        defaultState: (state) => {
            state = initialState;
        },
    }
    });

export const { setUser, defaultState, deleteUser } = authSlice.actions;
export default authSlice.reducer;

export const authSelector = (store) => store.auth;