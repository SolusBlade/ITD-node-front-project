import IconBtn from 'components/IconBtn/IconBtn';
import s from './BoardCard.module.scss';
import {
  deleteTaskById,
  updateTaskColumnById,
} from 'redux/board/boardOperations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import {
  selectBoards,
  selectCurrentBoardId,
  selectFilter,
  selectTasks,
} from 'redux/board/boardSelectors';
import { formatDate } from 'services/dateChange';
import { getFormattedValue } from 'services/priorityChange';
import { findPriorityColor } from 'services/priorityOptions';
import Modal from 'components/Modal/Modal';
import EditCard from 'components/Forms/AddAndEditCard/EditCard/EditCard';
import Icon from 'components/Icon/Icon';
import { trimTitleString } from 'services/trimStr';
import clsx from 'clsx';
import ButtonDelete from 'components/Modal/ButtonDelete';
import { useScrollBar } from 'hooks/useScrollBar';

const BoardCard = ({ column }) => {
  const allBoards = useSelector(selectBoards);
  const [redirectData, setRedirectData] = useState(null);
  const [currentCard, setCurrentCard] = useState(null);
  const currentBoardId = useSelector(selectCurrentBoardId);
  const [deleteModal, setDeleteModal] = useState(null);

  const allColumns =
    allBoards.filter(({ _id }) => _id === currentBoardId)[0].columns || [];

  const dispatch = useDispatch();
  const wrapperRef = useRef(null);
  const allCards = useSelector(selectTasks);
  const filter = useSelector(selectFilter);
  const cardWrapper = useRef(null);

  const handleDeleteModalOpen = id => {
    setDeleteModal(id);
  };

  const handleDeleteModalClose = () => setDeleteModal(null);

  const checkDate = date => {
    const currentDateTime = new Date();
    const deadlineDateTime = new Date(date);
    deadlineDateTime.setHours(0, 0, 0, 0);

    const currentDate = new Date(
      currentDateTime.getFullYear(),
      currentDateTime.getMonth(),
      currentDateTime.getDate()
    );

    return {
      isToday: currentDate.getTime() === deadlineDateTime.getTime(),
      isPast: currentDate > deadlineDateTime,
    };
  };

  const filteredCards = filter => {
    const result = allCards
      .filter(el => el.columnId === column._id)
      .sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    if (!filter) return result;

    return result.filter(el => el.priority === filter);
  };

  const hendleRedirectOpen = ({ columnId, boardId, cardId }) => {
    setCurrentCard(cardId);
    setRedirectData(allColumns.filter(({ _id }) => _id !== columnId));
  };

  const hendleRedirectClose = () => {
    setCurrentCard(null);
    setRedirectData(null);
  };

  const hendleRedirectClick = data => {
    dispatch(updateTaskColumnById(data));
    setCurrentCard(null);
    setRedirectData(null);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        hendleRedirectClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  const [editCardModal, setEditCardModal] = useState(null);

  const handleCloseEditCardModal = () => setEditCardModal(null);
  const handleOpenEditCardModal = card => setEditCardModal({ ...card });

  const hendleDeleteClick = id => {
    dispatch(deleteTaskById(id));
  };
  const trimText = (text, maxLength) => {
    if (text.length > maxLength) {
      if (text.includes(' ')) {
        const words = text.split(' ');
        let firstLine = '';
        let secondLine = '';

        for (let i = 0; i < words.length; i++) {
          if ((firstLine + words[i]).length <= maxLength) {
            firstLine += words[i] + ' ';
          } else {
            secondLine += words[i] + ' ';
          }
        }

        return firstLine.trim() + '\n' + secondLine.trim();
      } else {
        return text.slice(0, maxLength - 3) + '...';
      }
    }

    return text;
  };

  useScrollBar(cardWrapper, true);

  return (
    <>
      <div ref={cardWrapper} className="cardScroll">
        <ul className={s.cardList}>
          {filteredCards(filter).map(card => (
            <li className={s.cardToDo} key={card._id}>
              <div
                style={{
                  backgroundColor: findPriorityColor(card.priority),
                }}
                className={s.beforeColor}
              ></div>{' '}
              <h2 className={s.titleCard}>{trimTitleString(card.title, 25)}</h2>
              <p className={s.textCard}>{trimText(card.text, 95)}</p>
              <div className={s.line}></div>
              <div className={s.bottomMenuCard}>
                <div className={s.textBottomMenuCard}>
                  <div>
                    <h3 className={s.titleBottomMenuCard}>Priority</h3>
                    <p className={s.discriptionBottomMenuCard}>
                      <span
                        style={{
                          backgroundColor: findPriorityColor(card.priority),
                        }}
                        className={s.priorityColor}
                      ></span>{' '}
                      {getFormattedValue(card.priority)}
                    </p>
                  </div>
                  <div>
                    <h3 className={s.titleBottomMenuCard}>Deadline</h3>
                    <p className={s.discriptionBottomMenuCard}>
                      {formatDate(card.deadline)}
                    </p>
                  </div>
                </div>
                <div className={s.iconToDo}>
                  {(checkDate(card.deadline).isToday ||
                    checkDate(card.deadline).isPast) && (
                    <Icon
                      name="icon-alarm"
                      width={16}
                      height={16}
                      secondaryClassName={clsx(
                        s.alarm,
                        checkDate(card.deadline).isPast && s.deadLineFailed
                      )}
                    />
                  )}
                  {allColumns?.length > 1 && (
                    <IconBtn
                      name="icon-arrow"
                      width={16}
                      height={16}
                      onClick={() =>
                        hendleRedirectOpen({
                          columnId: card.columnId,
                          boardId: card.boardId,
                          cardId: card._id,
                        })
                      }
                    />
                  )}
                  <IconBtn
                    name="icon-pencil"
                    width={16}
                    height={16}
                    secondaryClassName={s.iconPencil}
                    onClick={() => handleOpenEditCardModal(card)}
                  />
                  <IconBtn
                    name="icon-trash"
                    width={16}
                    height={16}
                    secondaryClassName={s.iconTrash}
                    onClick={() => handleDeleteModalOpen(card._id)}
                  />

                  {redirectData && currentCard === card._id && (
                    <ul className={s.redirectList} ref={wrapperRef}>
                      {redirectData.map(column => (
                        <li
                          key={column._id}
                          className={s.redirectItem}
                          onClick={() =>
                            hendleRedirectClick({
                              idTask: card._id,
                              idColumn: column._id,
                            })
                          }
                        >
                          <p>{trimTitleString(column.title, 20)}</p>
                          <Icon
                            name="icon-arrow-redirect"
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
      </div>
      {editCardModal && (
        <Modal title="Edit card" closeModal={handleCloseEditCardModal}>
          <EditCard
            closeModal={handleCloseEditCardModal}
            card={editCardModal}
          />
        </Modal>
      )}
      {deleteModal && (
        <Modal title="Are you sure ?" closeModal={handleDeleteModalClose}>
          <ButtonDelete
            onClick={() => {
              hendleDeleteClick(deleteModal);
              handleDeleteModalClose();
            }}
          />
        </Modal>
      )}
    </>
  );
};

export default BoardCard;
