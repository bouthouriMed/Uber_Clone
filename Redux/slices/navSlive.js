import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    origin: null,
    destination: null,
    travelTimeInformations: null
}

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers:{
        setOrigin(state, action) {
            state.origin = action.paylaod
        },
        setDestination(state, action) {
            state.destination = action.paylaod
        },
        setTravelTimeInfo(state, action) {
            state.travelTimeInformations = action.paylaod
        },
    }
});


export const { actions } = navSlice;

// Selectors
export const selectOrigin = state => state.nav.origin
export const selectDestination = state => state.nav.destination
export const selectTravelTimeInfo = state => state.nav.travelTimeInformations

export default navSlice.reducer;


