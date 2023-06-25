import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    switchThemeApi, 
    updateAvatarApi, 
    updateUserApi
} from '../../services/connectoinsApi';

export const switchTheme = createAsyncThunk(
    'header/switchThemeApi',

    async(data, thunkAPI) => {
        try{
            console.log('switchThemeApi', data)
            // const response = await switchThemeApi(data);

            // return response;
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const updateAvatar = createAsyncThunk(
    'header/updateAvatarApi',

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
    'header/updateUserApi',

    async(data, thunkAPI) => {
        try{
            const response = await updateUserApi(data);

            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)