import { createSlice } from '@reduxjs/toolkit';

import {
  getCurrentUserInfo,
  logOutUser,
  loginUser,
  registerUser,
  switchTheme,
  updateAvatar,
  updateUser,
  toggleSidebar
} from './authOperations';

const fulfilledOperation = state => {
  state.isLoading = false;
  state.isLoggedIn = true;
  state.error = null;
};

const initialState = {
  user: { name: null, email: null, theme: null },
  token: null,
  refreshToken: null,
  avatar: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  isSidebar: false
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
        state.token = payload.userToken;
        state.refreshToken = payload.userToken;
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
      .addCase(logOutUser.fulfilled, (state, _) => {
        return initialState;
      })
      .addCase(switchTheme.fulfilled, (state, action) => {
        fulfilledOperation(state);
          state.user.theme = action.payload;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        fulfilledOperation(state);
          state.avatar = action.payload.avatarURL;
          state.user.avatar = action.payload.avatarURL;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        fulfilledOperation(state);
          state.user = { ...state.user, ...action.payload };
      })
      .addCase(toggleSidebar.fulfilled, (state, action) => {
        fulfilledOperation(state);
          state.isSidebar = action.payload;
      })
      .addMatcher(
        action =>
          action.type.startsWith('auth') && !action.type.startsWith('auth/switchTheme') && action.type.endsWith('/pending'),
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
