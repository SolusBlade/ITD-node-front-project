import { createSelector } from "@reduxjs/toolkit";

export const selectCurrentBoardId = state => state.board.currentBoardId;
export const selectBoards = state => state.board.boards;
export const selectTasks = state => state.board.tasks;

export const selectCurrentBoardColumns = createSelector(
  [selectBoards, selectCurrentBoardId],
  (boards, currentBoardId) => {
    const currentBoard = boards.filter(el => el._id === currentBoardId);
    const columns = currentBoard[0]?.columns;
    return columns;
  }
);
