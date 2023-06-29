import Icon from 'components/Icon/Icon';
import React, { useRef, useState } from 'react';
import s from './MainDashboard.module.scss';
import BoardColumn from '../BoardColumn/BoardColumn';
import AddColumn from 'components/Forms/AddAndEditColumn/AddColumn';
import Modal from 'components/Modal/Modal';
import { useScrollBar } from 'hooks/useScrollBar';
import { useSelector } from 'react-redux';
import { selectCurrentBoardColumns } from 'redux/board/boardSelectors';


const MainDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const columnWrapper = useRef(null);
  const columns = useSelector(selectCurrentBoardColumns)

  const handleAddColumnClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  useScrollBar(columnWrapper, columns?.length >= 1)

  return (
    <>
      <div ref={columnWrapper} className='columnScroll'>
        <div className={s.mainDashboard}>
          <BoardColumn />
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
