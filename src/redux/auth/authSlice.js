import { createSlice } from '@reduxjs/toolkit';

import {
  getCurrentUserInfo,
  logOutUser,
  loginUser,
  registerUser,
  switchTheme,
  updateAvatar,
  updateUser,
} from './authOperations';

const fulfilledOperation = state => {
  state.isLoading = false;
  state.isLoggedIn = true;
  state.error = null;
};

const initialState = {
  user: { name: null, email: null },
  token: null,
  avatar: null,
  theme: 'dark',
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',

  initialState,

  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        fulfilledOperation(state);
        state.token = payload.userToken;
        state.user.name = payload.newUser.name;
        state.user.email = payload.newUser.email;
        state.isLoading = false;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        fulfilledOperation(state);
        state.token = payload;
        state.isLoading = false;
      })
      .addCase(getCurrentUserInfo.fulfilled, (state, { payload }) => {
        fulfilledOperation(state);
        state.isLoading = false;
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.user.theme = payload.theme;
        state.user.avatar = payload.avatarURL;

      })
      .addCase(getCurrentUserInfo.pending, (state, { payload }) => {})
      .addCase(logOutUser.fulfilled, (state, _) => {
        return initialState;
      })
      .addCase(switchTheme.fulfilled, (state, action) => {
          state.theme = action.payload;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
          state.avatar = action.payload;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
          state.user = {...action.payload};
      })
      .addMatcher(
        action =>
          action.type.startsWith('auth') && action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        action =>
          action.type.startsWith('auth') && action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export default authSlice.reducer;
