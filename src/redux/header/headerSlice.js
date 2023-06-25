import { createSlice } from "@reduxjs/toolkit";
import { 
    switchTheme, 
    updateAvatar, 
    updateUser 
} from "./headerOperations";

const initialState = {
    user: {
        name: null,
        email: null,
    },
    avatar: null,
    theme: 'dark'
}

const headerReducer = createSlice({
    name: 'header',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(switchTheme.fulfilled, (state, action) => {
                console.log('switchTheme ', action.payload);
                console.log('satte ', state);
                state.theme = action.payload;
            })
            .addCase(updateAvatar.fulfilled, (state, action) => {
                state.avatar = action.payload;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.user = {...action.payload};
            })
    }
});

export default headerReducer.reducer;