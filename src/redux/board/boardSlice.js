import { createSlice } from '@reduxjs/toolkit';
import {
  createNewBoard,
  createNewColumn,
  createNewTask,
  deleteBoardById,
  deleteColumnById,
  deleteTaskById,
  getAllBoards,
  getAllTasks,
  getBoardById,
  getColumnById,
  updateBoardById,
  updateColumnById,
  updateTaskById,
  updateTaskColumnById,
  toggleSidebar,
  changeFilter,
} from './boardOperations';

const fulfilledOperation = state => {
  state.isBoardLoading = false;
  state.error = null;
};

const initialState = {
  boards: [],
  tasks: [],
  isBoardLoading: false,
  error: null,
  currentBoardId: null,
  currentColumn: null,
  filter: '',
  isSidebar: false,
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
        state.filter = '';
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
      .addCase(getAllTasks.fulfilled, (state, { payload }) => {
        state.tasks = payload;
        fulfilledOperation(state);
      })
      .addCase(createNewTask.fulfilled, (state, { payload }) => {
        state.tasks = payload;
        fulfilledOperation(state);
      })
      .addCase(updateTaskById.fulfilled, (state, { payload }) => {
        state.tasks = payload;
        fulfilledOperation(state);
      })
      .addCase(updateTaskColumnById.fulfilled, (state, { payload }) => {
        state.tasks = payload;
        fulfilledOperation(state);
      })
      .addCase(deleteTaskById.fulfilled, (state, { payload }) => {
        state.tasks = payload;
        fulfilledOperation(state);
      })
      .addCase(toggleSidebar.fulfilled, (state, { payload }) => {
        state.isSidebar = payload;
      })
      .addCase(changeFilter.fulfilled, (state, { payload }) => {
        state.filter = payload;
      })
      .addMatcher(
        action =>
          action.type.startsWith('board') &&
          !action.type.startsWith('board/toogleSidebar') &&
          !action.type.startsWith('board/changeFilter') &&
          action.type.endsWith('/pending'),
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
