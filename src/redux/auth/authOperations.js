import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import {
  getCurrentUserInfoApi,
  logOutApi,
  loginApi,
  registerApi,
  switchThemeApi,
  updateAvatarApi,
  updateUserApi,
} from 'services/connectoinsApi';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (newUser, thunkApi) => {
    const { name, email, password } = newUser;
    try {
      await registerApi({ name, email, password });
      const { accessToken: userToken } = await loginApi({ email, password });
      token.set(userToken);
      return { newUser, userToken };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (newUser, thunkApi) => {
    const { email, password } = newUser;
    try {
      const { accessToken: userToken, refreshToken } = await loginApi({ email, password });
      token.set(userToken);
      return {userToken, refreshToken};
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getCurrentUserInfo = createAsyncThunk(
  'auth/getCurrentUserInfo',
  async (_, { rejectWithValue, getState }) => {
    try {
      const {
        auth: { token: newToken },
      } = getState();
      token.set(newToken);
      const user = await getCurrentUserInfoApi();
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const {
        auth: { token },
      } = getState();
      return Boolean(token);
    },
  }
);

export const logOutUser = createAsyncThunk(
  'auth/logOut',
  async (_, thunkApi) => {
    try {
      const user = await logOutApi();
      token.unset();
      return user;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const switchTheme = createAsyncThunk(
    'auth/switchTheme',

    async(data, thunkAPI) => {
        try{
            const { theme } = await switchThemeApi({theme: data});
            return theme;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const updateAvatar = createAsyncThunk(
    'auth/updateAvatar',

    async(data, thunkAPI) => {
        try{
            const response = await updateAvatarApi(data);

            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const updateUser = createAsyncThunk(
    'auth/updateUser',

    async(data, thunkAPI) => {
        try{
            const response = await updateUserApi(data);

            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const toggleSidebar = createAsyncThunk(
  'auth/toggleSidebar',

  async (data, _) => {
      return data;
  }
)