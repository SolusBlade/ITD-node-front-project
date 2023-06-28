import Icon from 'components/Icon/Icon';
import React, { useState } from 'react';
import s from './MainDashboard.module.scss';
import BoardColumn from '../BoardColumn/BoardColumn';
import AddColumn from 'components/Forms/AddAndEditColumn/AddColumn';
// import { useDispatch } from "react-redux";
// import { createNewBoard, createNewColumn, deleteBoardById, deleteColumnById, getAllBoards, updateBoardById, updateColumnById } from "redux/board/boardOperations";
import Modal from 'components/Modal/Modal';
// import { createNewTask, deleteTaskById, getAllTasks, updateTaskById } from 'redux/board/boardOperations';

const MainDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  // eslint-disable-next-line
  const [showBoardColumn, setShowBoardColumn] = useState(true);

  const handleAddColumnClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className={s.mainDashboard}>
        {showBoardColumn && <BoardColumn />}
        <button className={s.btnAddColumn} onClick={handleAddColumnClick}>
          <div className={s.btnAddColumnW}>
            <Icon
              name="icon-btn-plus"
              width={14}
              height={14}
              secondaryClassName={s.iconPlus}
            />
          </div>
          Add another column
        </button>
      </div>

      {showModal && (
        <Modal title="Add column" closeModal={handleCloseModal}>
          <AddColumn closeModal={handleCloseModal} />
        </Modal>
      )}
    </>
  );
};
export default MainDashboard;
