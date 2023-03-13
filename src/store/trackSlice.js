/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    trackId: null,
}

export const trackSlice = createSlice({
    name: 'track',
    initialState,
    reducers: {
        setTrack: (state, action) => {
            state.trackId = action.payload
        }
    }
});

export const { setTrack } = trackSlice.actions;
export const selectTrack = (state) => state.track.trackId;
export default trackSlice.reducer