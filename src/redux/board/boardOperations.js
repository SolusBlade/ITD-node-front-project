import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createNewBoardApi,
  createNewColumnApi,
  createNewTaskApi,
  deleteBoardByIdApi,
  deleteColumnByIdApi,
  deleteTaskByIdApi,
  getAllBoardsApi,
  getAllTasksApi,
  updateBoardByIdApi,
  updateColumnByIdApi,
  updateTaskByIdApi,
  updateTaskColumnByIdApi,
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

export const getAllTasks = createAsyncThunk(
  'board/getAllTasks',

  async (_, thunkAPI) => {
    try {
      const tasks = await getAllTasksApi();
      return tasks;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createNewTask = createAsyncThunk(
  'board/createNewTask',

  async (data, thunkAPI) => {
    try {
      await createNewTaskApi(data);
      const tasks = await getAllTasksApi();
      return tasks;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTaskById = createAsyncThunk(
  'board/updateTaskById',

  async ({ idTask, data }, thunkAPI) => {
    try {
      await updateTaskByIdApi({ idTask, data });
      const tasks = await getAllTasksApi();
      return tasks;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTaskColumnById = createAsyncThunk(
  'board/updateTaskColumnById',

  async ({ idTask, idColumn }, thunkAPI) => {
    try {
      await updateTaskColumnByIdApi({ idTask, idColumn });
      const tasks = await getAllTasksApi();
      return tasks;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTaskById = createAsyncThunk(
  'board/deleteTaskById',

  async (idTask, thunkAPI) => {
    try {
      await deleteTaskByIdApi(idTask);
      const tasks = await getAllTasksApi();
      return tasks;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toggleSidebar = createAsyncThunk(
  'board/toogleSidebar',
  async (data, thunkAPI) => {
    try {
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeFilter = createAsyncThunk(
  'board/changeFilter',
  async (data, thunkAPI) => {
    try {
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
