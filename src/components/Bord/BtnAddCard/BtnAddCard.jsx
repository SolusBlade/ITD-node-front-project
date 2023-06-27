import Icon from 'components/Icon/Icon';
import s from './BtnAddCard.module.scss';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import AddCard from 'components/Forms/AddAndEditCard/AddCard/AddCard';

const BtnAddCard = ({column}) => {

  const [showModal, setShowModal] = useState(false);
// eslint-disable-next-line
  // const [showBoardColumn, setShowBoardColumn] = useState(true);

  const handleAddCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button className={s.btnAddCard} onClick={handleAddCardClick}>
        <div className={s.btnAddCardW}>
          <Icon
            name='icon-plus-dark'
            width={14}
            height={14}
            secondaryClassName={s.iconPlus}
          />
        </div>
          Add another card
      </button>

      {showModal && (
        <Modal title="Add card" closeModal={handleCloseModal}>
          <AddCard closeModal={handleCloseModal} boardId={column.boardId} columnId={column._id} />
        </Modal>
      )}
    </>
  )
}

export default BtnAddCard;
