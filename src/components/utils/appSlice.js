import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app", // Comma was missing here
    initialState: {
        isMenuOpen: true
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
    },
});

export const { toggleMenu } = appSlice.actions;
export default appSlice.reducer;