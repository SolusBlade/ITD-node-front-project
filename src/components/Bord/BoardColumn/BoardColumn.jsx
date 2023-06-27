import IconBtn from 'components/IconBtn/IconBtn';
import s from './BoardColumn.module.scss';
import BoardCard from '../BoardCard/BoardCard';
import BtnAddCard from '../BtnAddCard/BtnAddCard';
import { useSelector } from 'react-redux';
import { selectCurrentBoard, selectBoards } from 'redux/board/boardSelectors';
const BoardColumn = () => {
  // const columns = [
  //   { title: 'To Do', id: 1 },
  //   { title: 'Work', id: 2 },
  //   // {title: "Progress" , id: 3},
  //   // {title: "Done" , id: 4},
  // ];

  const currentBoardId = useSelector(selectCurrentBoard);
  const boards = useSelector(selectBoards);

  const currentBoard = boards.filter(el => el._id === currentBoardId);

  const columns = currentBoard[0]?.columns;

  return (
    <ul className={s.columnList}>
      {columns?.map(column => (
        <li key={column._id}>
          <div className={s.titleToDo}>
            <h2 className={s.titleCard}>{column.title}</h2>
            <div className={s.iconToDo}>
              <IconBtn
                name="icon-pencil"
                width={16}
                height={16}
                secondaryClassName={s.iconPencil}
              />
              <IconBtn
                name="icon-trash"
                width={16}
                height={16}
                secondaryClassName={s.iconTrash}
              />
            </div>
          </div>
          <div>
            <BoardCard />
            <BtnAddCard />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BoardColumn;
