import { createSlice } from '@reduxjs/toolkit';

import {
  getCurrentUserInfo,
  logOutUser,
  loginUser,
  registerUser,
} from './authOperations';

const fulfilledOperation = state => {
  state.isLoading = false;
  state.isLoggedIn = true;
  state.error = null;
};

const initialState = {
  user: { name: null, email: null },
  token: null,
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
        state.token = payload.token;
        state.user.name = payload.newUser.name;
        state.user.email = payload.newUser.email;
        state.isLoading = false;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        fulfilledOperation(state);
        state.token = payload.token;
        state.isLoading = false;
      })
      .addCase(getCurrentUserInfo.fulfilled, (state, { payload }) => {
        fulfilledOperation(state);
        if (payload.user?.balance) {
          state.balance = payload.user?.balance;
        }
        state.isLoading = false;
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
      })
      .addCase(getCurrentUserInfo.pending, (state, { payload }) => {})
      .addCase(logOutUser.fulfilled, (state, _) => {
        return initialState;
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
