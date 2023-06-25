import Icon from "components/Icon/Icon";
// import React, { useState } from "react";
import s from './MainDashboard.module.scss';
import BoardColumn from "../BoardColumn/BoardColumn";
import { useDispatch } from "react-redux";
import { createNewBoard, deleteBoardById, getAllBoards, updateBoardById } from "redux/board/boardOperations";

const MainDashboard = () => {
  // const [columns, setColumns] = useState([]);
  const dispatch = useDispatch();

  const HandleClick = () => {
      dispatch(deleteBoardById(
        '6498b4a6fe7f9e8b99762d22'
      ))
    // dispatch(createNewBoard(
    //   {
    //     title:'www',
    //     icon: 'star',
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
    // dispatch(getAllBoards())
  }
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

  return (
    <div className={s.mainDashboard}>

        <BoardColumn />

        <button className={s.btnAddColumn}>
          <div className={s.btnAddColumnW}>
            <Icon
              name='icon-plus-white'
              width={14}
              height={14}
              secondaryClassName={s.iconPlus}
            />
          </div>
            Add another column
        </button>
        <button onClick={HandleClick}>qqq</button>
    </div>
  )
}

export default MainDashboard;
