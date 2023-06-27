import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { Button } from '@mui/material';
import cactus from '../../static/images/cactus.png';
import { LogoComponent } from 'components/LogoComponent/LogoComponent';
import NewBoard from 'components/Forms/NewBoardAndEditBoard/NewBoardForm';
import NeedHelp from 'components/Forms/NeedHelp/NeedHelp';
import Modal from 'components/Modal/Modal';
import Icon from 'components/Icon/Icon';
import { logOutUser } from 'redux/auth/authOperations';
import st from './Sidebar.module.scss';
import {
  deleteBoardById,
  getAllBoards,
  getBoardById,
} from 'redux/board/boardOperations';
import EditBoard from 'components/Forms/NewBoardAndEditBoard/EditBoard';
import { selectBoards, selectCurrentBoardId } from 'redux/board/boardSelectors';
import { selectName } from 'redux/auth/authSelectors';

export const Sidebar = () => {
  const boards = useSelector(selectBoards);
  const isLoggedIn = useSelector(selectName);
  const currentBoard = useSelector(selectCurrentBoardId);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [addBoardModal, setAddBoardModal] = useState(false);
  const [needHelpModalOpen, setNeedHelpModalOpen] = useState(false);
  const [editBoardModal, setEditBoardModal] = useState(false);
  const [activeItemId, setActiveItemId] = useState(null);
  const [boardToEdit, setBoardToEdit] = useState(null);
  // console.log(isLoggedIn);

  useEffect(() => {
    isLoggedIn && dispatch(getAllBoards());
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    if (boards.length === 0) {
      return;
    }
    if (!currentBoard) {
      setActiveItemId(boards[0]._id);
      const newTitle = boards[0].title.split(' ').join('-').toLowerCase();
      navigate(`/home/${newTitle}`);
    }
  }, [boards, currentBoard, navigate]);

  useEffect(() => {
    dispatch(getBoardById(activeItemId));
  }, [activeItemId, dispatch]);

  const handleAddBoard = () => setAddBoardModal(!addBoardModal);

  const handleNeedHelp = () => setNeedHelpModalOpen(!needHelpModalOpen);

  const handleEditBoardModal = () => setEditBoardModal(!editBoardModal);

  const handleChangeActive = (id, title) => {
    setActiveItemId(id);

    const newTitle = title.split(' ').join('-').toLowerCase();
    navigate(`/home/${newTitle}`);
  };

  const handleEditBoard = id => {
    setBoardToEdit(boards.filter(el => el._id === currentBoard));
    handleEditBoardModal();
  };

  const handleDeleteBoard = id => {
    dispatch(deleteBoardById(id));
    dispatch(getBoardById(null));
  };

  const handleLogout = () => {
    dispatch(logOutUser());
  };
  return (
    <nav>
      <section className={st.sectionTop}>
        <div className={st.container}>
          <div className={st.logoWrap}>
            <LogoComponent />
            <p className={st.logoText}>Task Pro</p>
          </div>

          <p className={st.boardsTitle}>My boards</p>
          <div className={st.createBoard}>
            <p>Create a new board</p>
            <button
              type="button"
              className={st.buttonCreate}
              onClick={handleAddBoard}
            >
              <Icon name={'icon-btn-plus'} width={20} height={20} />
            </button>
          </div>
        </div>
      </section>
      <section className={st.sectionBoards}>
        <ul className={st.boardsList}>
          {boards?.map(el => {
            const currentClass =
              el._id === activeItemId ? st.boardItemActive : st.boardItem;
            return (
              <li
                key={el._id}
                className={currentClass}
                onClick={() => handleChangeActive(el._id, el.title)}
              >
                <div className={st.boardName}>
                  <Icon
                    name={el.icon}
                    width={18}
                    height={18}
                    className={st.boardIcon}
                  />
                  <p>{el.title}</p>
                </div>
                {el._id === activeItemId && (
                  <>
                    <div className={st.boardEditIcons}>
                      <div
                        className={st.boardButtons}
                        onClick={() => handleEditBoard(el._id)}
                      >
                        <Icon name={'icon-pencil'} width={16} height={16} />
                      </div>
                      <div
                        className={st.boardButtons}
                        onClick={() => handleDeleteBoard(el._id)}
                      >
                        <Icon name={'icon-trash'} width={16} height={16} />
                      </div>
                    </div>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </section>
      <section className={st.sectionHelp}>
        <div className={st.container}>
          <div className={st.helpWrapper}>
            <img src={cactus} alt="cactus" className={st.helpCactus} />
            <p className={st.helpText}>
              If you need help with <br />
              <span> TaskPro</span>, check out our support resources or reach
              out to our customer support team.
            </p>
            <button className={st.helpSend} onClick={handleNeedHelp}>
              <Icon name={'icon-help-circle'} width={20} height={20} />
              Need help?
            </button>
          </div>
        </div>
      </section>
      <section className={st.sectionLogOut}>
        <div className={st.container}>
          <button className={st.btnLogout} onClick={handleLogout}>
            <Icon name={'icon-iconlogout'} width={32} height={32} />
            Log out
          </button>
        </div>
      </section>
      {addBoardModal && (
        <Modal title={'New board'} closeModal={handleAddBoard}>
          <NewBoard closeModal={handleAddBoard} />
        </Modal>
      )}
      {needHelpModalOpen && (
        <Modal title="Need help" closeModal={handleNeedHelp}>
          <NeedHelp closeModal={handleNeedHelp} />
        </Modal>
      )}
      {editBoardModal && (
        <Modal title="Edit board" closeModal={handleEditBoardModal}>
          <EditBoard
            closeModal={handleEditBoardModal}
            boardToEdit={boardToEdit}
          />
        </Modal>
      )}
    </nav>
  );
};
