import { createSlice } from '@reduxjs/toolkit';
import { createNewBoard, deleteBoardById, getAllBoards, updateBoardById } from './boardOperations';

const fulfilledOperation = state => {
  state.isLoading = false;
  state.error = null;
};

const initialState = {
  boards: [],
  isLoading: false,
  error: null,
};

const boardSlice = createSlice({
  name: 'board',

  initialState,

  extraReducers: builder => {
    builder
      .addCase(createNewBoard.fulfilled, (state, {payload}) => {
        state.boards = [...state.boards, payload];
      })
      .addCase(getAllBoards.fulfilled, (state, {payload}) => {
          state.boards = payload;
      })
      .addCase(updateBoardById.fulfilled, (state, {payload}) => {
        state.boards = payload;
      })
      .addCase(deleteBoardById.fulfilled, (state, {payload}) => {
        state.boards = payload;
      })
      .addMatcher(
        action =>
          action.type.startsWith('board') && action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        action =>
          action.type.startsWith('board') && action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export default boardSlice.reducer;
