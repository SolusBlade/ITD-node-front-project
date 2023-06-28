import { createSelector } from '@reduxjs/toolkit';

export const selectIsBoardLoading = state => state.board.isBoardLoading;
export const selectCurrentBoardId = state => state.board.currentBoardId;
export const selectBoards = state => state.board.boards;
export const selectTasks = state => state.board.tasks;

export const selectCurrentBoardTitle = createSelector(
  [selectBoards, selectCurrentBoardId],
  (boards, currentBoardId) => {
    const currentBoard = boards.filter(el => el._id === currentBoardId);
    const title = currentBoard[0]?.title;
    return title;
  }
);

export const selectCurrentBoardBackground = createSelector(
  [selectBoards, selectCurrentBoardId],
  (boards, currentBoardId) => {
    const currentBoard = boards.filter(el => el._id === currentBoardId);
    const background = currentBoard[0]?.background;
    return background;
  }
);

export const selectCurrentBoardColumns = createSelector(
  [selectBoards, selectCurrentBoardId],
  (boards, currentBoardId) => {
    const currentBoard = boards.filter(el => el._id === currentBoardId);
    const columns = currentBoard[0]?.columns;
    return columns;
  }
);
