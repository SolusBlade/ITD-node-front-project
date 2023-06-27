import IconBtn from 'components/IconBtn/IconBtn';
import s from './BoardCard.module.scss';
// eslint-disable-next-line
import { deleteTaskById } from 'redux/board/boardOperations';
// eslint-disable-next-line
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line
import { useState } from 'react';
import { selectTasks } from 'redux/board/boardSelectors';
import { formatDate } from 'services/dateChange';
import { getFormattedValue } from 'services/priorityChange';
import { findPriorityColor } from 'services/priorityOptions';

const BoardCard = ({column}) => {

  const allCards = useSelector(selectTasks);

  const filteredCards = (filter) => {
    return allCards
    .filter(el => el.columnId === column._id)
    .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
  }

  // const filtredCardsByDeadline = () => {

  // }

  const dispatch = useDispatch()

  // const [editCardModal, setEditCardModal] = useState(null);

  // const handleCloseEditCardModal = () => setEditCardModal(null);
  // const handleOpenEditCardModal = (card) => setEditCardModal(card);

  const hendleDeleteClick = (id) => {
    dispatch(deleteTaskById(id))
  }

  return (
    <>
      <ul className={s.cardList}>
        {filteredCards().map((card) => (
          <li className={s.cardToDo} key={card._id}>
            <h2 className={s.titleCard}>{card.title}</h2>
            <p className={s.textCard}>{card.text}</p>
            <div className={s.line}></div>
            <div className={s.bottomMenuCard}>
              <div className={s.textBottomMenuCard}>
                <div>
                  <h3 className={s.titleBottomMenuCard}>Priority</h3>
                  <p className={s.discriptionBottomMenuCard}><span style={{backgroundColor:findPriorityColor(card.priority)}} className={s.priorityColor}></span> {getFormattedValue(card.priority)}</p>
                </div>
                <div>
                  <h3 className={s.titleBottomMenuCard}>Deadline</h3>
                  <p className={s.discriptionBottomMenuCard}>{formatDate(card.deadline)}</p>
                </div>
              </div>

              <div className={s.iconToDo}>
                <IconBtn
                  name='icon-arrow'
                  width={16}
                  height={16}
                  secondaryClassName={s.iconArrow}
                />
                <IconBtn
                  name='icon-pencil'
                  width={16}
                  height={16}
                  secondaryClassName={s.iconPencil}
                />
                <IconBtn
                  name='icon-trash'
                  width={16}
                  height={16}
                  secondaryClassName={s.iconTrash}
                  onClick={() => hendleDeleteClick(card._id)}
                />
                </div>
              </div>
          </li>
        ))}
      </ul>
      {/* {editCardModal && (
        <Modal title="Edit column" closeModal={handleCloseEditCardModal}>
          <AddCard closeModal={handleCloseEditCardModal}/>
        </Modal>
      )} */}
    </>
  )
}

export default BoardCard;


  // const cards = [
    // {
    //   title: "The Watch Spot Design",
    //   id: 1,
    //   text: "Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.",
    //   priority: "",
    //   deadline: "12/05/2023",
    //   createdAt: "2023-06-21T18:25:45.953+00:00",
    //   updatedAt: "2023-06-21T18:25:45.953+00:00",
    // },
    // {
    //   title: "The Watch Spot Design",
    //   id: 2,
    //   text: "Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.",
    //   priority: "",
    //   deadline: "12/05/2023",
    //   createdAt: "2023-06-21T18:25:45.953+00:00",
    //   updatedAt: "2023-06-21T18:25:45.953+00:00",
    // }
  // ]
