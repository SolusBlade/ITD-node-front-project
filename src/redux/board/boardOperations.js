import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createNewBoardApi,
  createNewColumnApi,
  deleteBoardByIdApi,
  deleteColumnByIdApi,
  getAllBoardsApi,
  updateBoardByIdApi,
  updateColumnByIdApi,
} from 'services/connectoinsApi';

export const getAllBoards = createAsyncThunk(
  'board/getAllBoards',

  async (_, thunkAPI) => {
    try {
      const boards = await getAllBoardsApi();
      return boards;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getBoardById = createAsyncThunk(
  'board/getBoardById',
  async (id, thunkAPI) => {
    try {
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getColumnById = createAsyncThunk(
  'board/getColumnById',
  async (id, thunkAPI) => {
    try {
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createNewBoard = createAsyncThunk(
  'board/createNewBoard',

  async (data, thunkAPI) => {
    try {
      const board = await createNewBoardApi(data);
      return board;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateBoardById = createAsyncThunk(
  'board/updateBoardById',

  async (data, thunkAPI) => {
    try {
      await updateBoardByIdApi(data);
      const boards = await getAllBoardsApi();
      return boards;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBoardById = createAsyncThunk(
  'board/deleteBoardById',

  async (id, thunkAPI) => {
    try {
      await deleteBoardByIdApi(id);
      const boards = await getAllBoardsApi();
      return boards;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createNewColumn = createAsyncThunk(
  'board/createNewColumn',

  async ({ idBoard, data }, thunkAPI) => {
    try {
      await createNewColumnApi({ idBoard, data });
      const boards = await getAllBoardsApi();
      return boards;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateColumnById = createAsyncThunk(
  'board/updateColumnById',

  async ({ idColumn, idBoard, data }, thunkAPI) => {
    try {
      await updateColumnByIdApi({ idBoard, idColumn, data });
      const boards = await getAllBoardsApi();
      return boards;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteColumnById = createAsyncThunk(
  'board/deleteColumnById',

  async ({ idColumn, idBoard }, thunkAPI) => {
    try {
      await deleteColumnByIdApi({ idBoard, idColumn });
      const boards = await getAllBoardsApi();
      return boards;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
