import IconBtn from 'components/IconBtn/IconBtn';
import s from './BoardCard.module.scss';
// eslint-disable-next-line
import { deleteTaskById, updateTaskColumnById } from 'redux/board/boardOperations';
// eslint-disable-next-line
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line
import { useEffect, useRef, useState } from 'react';
import { selectBoards, selectTasks } from 'redux/board/boardSelectors';
import { formatDate } from 'services/dateChange';
import { getFormattedValue } from 'services/priorityChange';
import { findPriorityColor } from 'services/priorityOptions';
import Icon from 'components/Icon/Icon';
import { trimTitleString } from 'services/trimStr';

const BoardCard = ({column}) => {
  const [redirectData, setRedirectData] = useState(null)
  const [currentCard, setCurrentCard] = useState(null)
  const dispatch = useDispatch()
  const wrapperRef = useRef(null);
  const allCards = useSelector(selectTasks);
  const allBoards = useSelector(selectBoards);

  const filteredCards = (filter) => {
    return allCards
    .filter(el => el.columnId === column._id)
    .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
  }

  const hendleRedirectOpen = ({columnId, boardId, cardId}) => {
    const allCurrentBoardColumns = allBoards.filter(({ _id }) => _id === boardId)[0].columns
    setCurrentCard(cardId)
    setRedirectData(allCurrentBoardColumns.filter(({ _id }) => _id !== columnId))
  }

  const hendleRedirectClose = () => {
    setCurrentCard(null)
    setRedirectData(null)
  }

  const hendleRedirectClick = (data) => {
    dispatch(updateTaskColumnById(data))
    setCurrentCard(null)
    setRedirectData(null)
  }

  useEffect(() => {
      function handleClickOutside(event) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            hendleRedirectClose()
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [wrapperRef]);


  // const filtredCardsByDeadline = () => {

  // }


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
            <h2 className={s.titleCard}>{trimTitleString(card.title, 25)}</h2>
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
                  onClick={() => hendleRedirectOpen({columnId: card.columnId, boardId: card.boardId, cardId: card._id})}
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
                {redirectData && currentCard === card._id && (
                    <ul className={s.redirectList} ref={wrapperRef}>
                      {redirectData.map((column) => (
                        <li key={column._id} className={s.redirectItem} onClick={() => hendleRedirectClick({idTask: card._id, idColumn: column._id})}>
                          <p>{column.title}</p>
                          <Icon
                            name='icon-arrow-redirect'
                            width={16}
                            height={16}
                            secondaryClassName={s.iconArrow}
                          />
                        </li>
                      ))}
                    </ul>
                )}
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
