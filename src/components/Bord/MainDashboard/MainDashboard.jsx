import Icon from "components/Icon/Icon";
// import React, { useState } from "react";
import s from './MainDashboard.module.scss';
import BoardColumn from "../BoardColumn/BoardColumn";

const MainDashboard = () => {
  // const [columns, setColumns] = useState([]);


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
              name='icon-plus'
              width={14}
              height={14}
              secondaryClassName={s.iconPlus}
            />
          </div>
            Add another column
        </button>

    </div>
  )
}

export default MainDashboard;
