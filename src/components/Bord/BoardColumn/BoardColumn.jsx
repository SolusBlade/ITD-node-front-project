import IconBtn from 'components/IconBtn/IconBtn';
import s from './BoardColumn.module.scss';
import BoardCard from '../BoardCard/BoardCard';
import BtnAddCard from '../BtnAddCard/BtnAddCard';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentBoardColumns } from 'redux/board/boardSelectors';
import { deleteColumnById } from 'redux/board/boardOperations';
import { useState } from 'react';
import EditColumn from 'components/Forms/AddAndEditColumn/EditColumn';
import Modal from 'components/Modal/Modal';


const BoardColumn = () => {
  const columns = useSelector(selectCurrentBoardColumns);
  const dispatch = useDispatch()
  const [editColumnModal, setEditColumnModal] = useState(null);

  const handleCloseEditColumnModal = () => setEditColumnModal(null);
  const handleOpenEditColumnModal = (column) => setEditColumnModal(column);

  const hendleDeleteClick = ({ _id: idColumn, boardId: idBoard }, e) => {
    dispatch(deleteColumnById({idColumn, idBoard}))
  }

  return (
    <>
       <ul className={s.columnList}>
      {columns?.map(column => (
        <li key={column._id} className={s.columnItem}>
          <div className={s.titleToDo}>
            <h2 className={s.titleCard}>{column.title}</h2>
            <div className={s.iconToDo} >
              <IconBtn
                name="icon-pencil"
                width={16}
                height={16}
                secondaryClassName={s.iconPencil}
                onClick={() => handleOpenEditColumnModal(column)}
              />
              <IconBtn
                name="icon-trash"
                width={16}
                height={16}
                secondaryClassName={s.iconTrash}
                onClick={() => hendleDeleteClick(column)}
              />
            </div>
          </div>
          <div>
            <BoardCard column={column}/>
            <BtnAddCard column={column}/>
          </div>
        </li>
      ))}
    </ul>
    {editColumnModal && (
        <Modal title="Edit column" closeModal={handleCloseEditColumnModal}>
          <EditColumn closeModal={handleCloseEditColumnModal} column={editColumnModal}/>
        </Modal>
      )}
    </>
  );
};

export default BoardColumn;
