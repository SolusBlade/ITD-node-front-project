import { createSlice } from '@reduxjs/toolkit';
import {
  createNewBoard,
  createNewColumn,
  deleteBoardById,
  deleteColumnById,
  getAllBoards,
  getBoardById,
  getColumnById,
  updateBoardById,
  updateColumnById,
} from './boardOperations';

const fulfilledOperation = state => {
  state.isBoardLoading = false;
  state.error = null;
};

const initialState = {
  boards: [],
  isBoardLoading: false,
  error: null,
  currentBoardId: null,
  currentColumn: null,
};

const boardSlice = createSlice({
  name: 'board',

  initialState,

  extraReducers: builder => {
    builder
      .addCase(createNewBoard.fulfilled, (state, { payload }) => {
        state.boards = [...state.boards, payload];
        fulfilledOperation(state);
      })
      .addCase(getAllBoards.fulfilled, (state, { payload }) => {
        state.boards = payload;
        fulfilledOperation(state);
      })
      .addCase(updateBoardById.fulfilled, (state, { payload }) => {
        state.boards = payload;
        fulfilledOperation(state);
      })
      .addCase(deleteBoardById.fulfilled, (state, { payload }) => {
        state.boards = payload;
        fulfilledOperation(state);
      })
      .addCase(createNewColumn.fulfilled, (state, { payload }) => {
        state.boards = payload;
        fulfilledOperation(state);
      })
      .addCase(updateColumnById.fulfilled, (state, { payload }) => {
        state.boards = payload;
        fulfilledOperation(state);
      })
      .addCase(getBoardById.fulfilled, (state, { payload }) => {
        state.currentBoardId = payload;
        fulfilledOperation(state);
      })
      .addCase(getColumnById.fulfilled, (state, { payload }) => {
        state.currentColumn = payload;
        fulfilledOperation(state);
      })
      .addCase(deleteColumnById.fulfilled, (state, { payload }) => {
        state.boards = payload;
        fulfilledOperation(state);

      })
      .addMatcher(
        action =>
          action.type.startsWith('board') && action.type.endsWith('/pending'),
        state => {
          state.isBoardLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        action =>
          action.type.startsWith('board') && action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.isBoardLoading = false;
          state.error = payload;
        }
      );
  },
});

export default boardSlice.reducer;
