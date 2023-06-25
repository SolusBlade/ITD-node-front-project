import { createAsyncThunk } from "@reduxjs/toolkit";
import { createNewBoardApi, deleteBoardByIdApi, getAllBoardsApi, updateBoardByIdApi } from "services/connectoinsApi";

export const getAllBoards = createAsyncThunk(
  'board/getAllBoards',

  async(data, thunkAPI) => {
      try{
          const boards = await getAllBoardsApi();
          return boards;
      } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
      }
  }
)

export const createNewBoard = createAsyncThunk(
  'board/createNewBoard',

  async(data, thunkAPI) => {
      try{
          const board = await createNewBoardApi(data);
          return board;
      } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
      }
  }
)

export const updateBoardById = createAsyncThunk(
  'board/updateBoardById',

  async(data, thunkAPI) => {
      try{
          await updateBoardByIdApi(data);
          const boards = await getAllBoardsApi();
          return boards;
      } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
      }
  }
)

export const deleteBoardById = createAsyncThunk(
  'board/deleteBoardById',

  async(id, thunkAPI) => {
      try{
          await deleteBoardByIdApi(id);
          const boards = await getAllBoardsApi();
          return boards;
      } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
      }
  }
)

