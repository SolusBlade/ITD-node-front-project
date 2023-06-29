import Icon from 'components/Icon/Icon';
import s from './BtnAddCard.module.scss';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import AddCard from 'components/Forms/AddAndEditCard/AddCard/AddCard';
import { useSelector } from 'react-redux';
import { selectTasks } from 'redux/board/boardSelectors';


const BtnAddCard = ({ column }) => {
  const cards = useSelector(selectTasks)
  const [showModal, setShowModal] = useState(false);

  const handleAddCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  
  return (
    <>
      <button className={s.btnAddCard} onClick={handleAddCardClick} style={
      cards.filter(el => el.columnId === column._id).length > 0 ? { marginTop: "14px" } : null
      }>
        <div className={s.btnAddCardW}>
          <Icon
            name='icon-btn-plus'
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
