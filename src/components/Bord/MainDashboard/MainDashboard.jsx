import Icon from 'components/Icon/Icon';
import React, { useState } from 'react';
import s from './MainDashboard.module.scss';
import BoardColumn from '../BoardColumn/BoardColumn';
import AddColumn from 'components/Forms/AddAndEditColumn/AddColumn';
// import { useDispatch } from "react-redux";
// import { createNewBoard, createNewColumn, deleteBoardById, deleteColumnById, getAllBoards, updateBoardById, updateColumnById } from "redux/board/boardOperations";
import Modal from 'components/Modal/Modal';

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
              name="icon-plus-white"
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

      {/* <button onClick={HandleClick}>qqq</button> */}
    </>
  );
};
export default MainDashboard;

// const dispatch = useDispatch();

// const HandleClick = () => {
// dispatch(deleteColumnById({idBoard: '6498cf6a2d349cd4315bedc7', idColumn: "6498cfed2d349cd4315bedea"}))
// dispatch(updateColumnById({idBoard: '6498cf6a2d349cd4315bedc7', idColumn: "6498cfed2d349cd4315bedea", data: {title: "Progress"}}))
// dispatch(createNewColumn({idBoard: '6498cf6a2d349cd4315bedc7', data: {title: "To Do 3"}}))
// dispatch(deleteBoardById(
//   '6498b4a6fe7f9e8b99762d22'
// ))
// dispatch(createNewBoard(
//   {
//     title:'ccc',
//     icon: 'ppp',
//     background: `none`,
//   }
// ))
// dispatch(updateBoardById(
//   {id: '6498b4a6fe7f9e8b99762d22',
//   data: {
//       title:"iii",
//       icon:"star",
//       background:`none`,
//       columns: [],
//   }}
// ))
//   dispatch(getAllBoards())
// }
// const handleEditColumn = (columnId, newTitle) => {
//   const updatedColumns = columns.map((column) =>
//     column.id === columnId ? { ...column, title: newTitle } : column
//   );
//   setColumns(updatedColumns);
// };

// const handleDeleteColumn = (columnId) => {
//   const updatedColumns = columns.filter((column) => column.id !== columnId);
//   setColumns(updatedColumns);
// };
