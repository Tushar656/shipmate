"use client"

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
};
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const { name, password } = action.payload;
            state.user = { name, password };
        },
        fill: (state, action) => {
            const { origin, destination, date, weight } = action.payload;
            state.user.origin = origin;
            state.user.destination = destination;
            state.user.date = date;
            state.user.weight = weight;
        },
    }
});
export const { login, fill } = authSlice.actions;
export const selectUser = (state) => state.auth.user;
export default authSlice.reducer;
