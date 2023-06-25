import { createSlice } from '@reduxjs/toolkit';
import { createNewBoard, createNewColumn, deleteBoardById, getAllBoards, updateBoardById, updateColumnById } from './boardOperations';

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
        fulfilledOperation(state)
      })
      .addCase(getAllBoards.fulfilled, (state, {payload}) => {
        state.boards = payload;
        fulfilledOperation(state)
      })
      .addCase(updateBoardById.fulfilled, (state, {payload}) => {
        state.boards = payload;
        fulfilledOperation(state)
      })
      .addCase(deleteBoardById.fulfilled, (state, {payload}) => {
        state.boards = payload;
        fulfilledOperation(state)
      })
      .addCase(createNewColumn.fulfilled, (state, {payload}) => {
        state.boards = payload;
        fulfilledOperation(state)
      })
      .addCase(updateColumnById.fulfilled, (state, {payload}) => {
        state.boards = payload;
        fulfilledOperation(state)
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
