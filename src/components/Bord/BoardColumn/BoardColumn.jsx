import IconBtn from 'components/IconBtn/IconBtn';
import s from './BoardColumn.module.scss';
import BoardCard from '../BoardCard/BoardCard';
import BtnAddCard from '../BtnAddCard/BtnAddCard';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentBoardColumns,
  selectCurrentBoardId,
} from 'redux/board/boardSelectors';
import { deleteColumnById } from 'redux/board/boardOperations';
import { useState } from 'react';
import EditColumn from 'components/Forms/AddAndEditColumn/EditColumn';
import Modal from 'components/Modal/Modal';
import { trimTitleString } from 'services/trimStr';
import ButtonDelete from 'components/Modal/ButtonDelete';

const BoardColumn = () => {
  const columns = useSelector(selectCurrentBoardColumns);
  const currentBoardId = useSelector(selectCurrentBoardId);
  const [editColumnModal, setEditColumnModal] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);
  const dispatch = useDispatch();

  const handleDeleteModalOpen = column => {
    setDeleteModal(column);
  };
  const handleDeleteModalClose = () => setDeleteModal(null);

  const handleCloseEditColumnModal = () => setEditColumnModal(null);
  const handleOpenEditColumnModal = column => setEditColumnModal(column);

  const hendleDeleteClick = data => {
    dispatch(deleteColumnById(data));
  };

  return (
    <>
      <div className={s.columnList}>
        {columns?.map(column => (
          <div key={column._id} className={s.columnItem}>
            <div className={s.titleToDo}>
              <h2 className={s.titleCard}>
                {trimTitleString(column.title, 20)}
              </h2>
              <div className={s.iconToDo}>
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
                  onClick={() => handleDeleteModalOpen(column._id)}
                />
              </div>
            </div>
            <div>
              <BoardCard column={column} />
              <BtnAddCard column={column} />
            </div>
          </div>
        ))}
      </div>
      {editColumnModal && (
        <Modal title="Edit column" closeModal={handleCloseEditColumnModal}>
          <EditColumn
            closeModal={handleCloseEditColumnModal}
            column={editColumnModal}
          />
        </Modal>
      )}
      {deleteModal && (
        <Modal title="Are you sure ?" closeModal={handleDeleteModalClose}>
          <ButtonDelete
            onClick={() => {
              hendleDeleteClick({
                idColumn: deleteModal,
                idBoard: currentBoardId,
              });
              handleDeleteModalClose();
            }}
          />
        </Modal>
      )}
    </>
  );
};

export default BoardColumn;
