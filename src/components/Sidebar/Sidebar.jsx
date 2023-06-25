import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { LogoComponent } from 'components/LogoComponent/LogoComponent';
import IconBtn from 'components/Icon/Icon';
import NewBoard from 'components/Forms/NewBoard/NewBoardForm';
import Modal from 'components/Modal/Modal';
import { logOutUser } from 'redux/auth/authOperations';
import st from './Sidebar.module.scss';
import Icon from 'components/Icon/Icon';

export const Sidebar = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const boards = [
    {
      id: 1,
      icon: 'puzzle',
      name: 'Project office',
    },
    {
      id: 2,
      icon: 'star',
      name: 'Neon Light Project',
    },
  ];

  const handleAddBoard = () => {
    setIsOpen(true);
  };

  const handleEditBoard = () => {
    console.log('edit');
  };
  const handleDeleteBoard = () => {
    console.log('delete');
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleHelp = () => {
    console.log('help');
  };

  const handleLogout = () => {
    dispatch(logOutUser());
  };
  return (
    <>
      <section className={st.sectionTop}>
        <div className={st.container}>
          <div className={st.logoWrap}>
            <LogoComponent />
            <p className={st.logoText}>Task Pro</p>
          </div>

          <p className={st.boardsTitle}>My boards</p>
          <div className={st.createBoard}>
            <p>Create a new board</p>
            <Button
              variant="contained"
              color="inherit"
              className={st.buttonCreate}
              onClick={handleAddBoard}
              size="medium"
            >
              +
            </Button>
          </div>
        </div>
      </section>
      <section className={st.sectionBoards}>
        <ul className={st.boardsList}>
          {boards?.map(el => {
            const activeItem = true;
            const currentClass = activeItem ? st.boardItemActive : st.boardItem;
            return (
              <li key={el.id} className={currentClass}>
                <span className={st.boardName}>
                  <Icon name={el.icon} width={18} height={18} />
                  {el.name}
                </span>
                {activeItem && (
                  <>
                    <span className={st.boardEditIcons}>
                      <IconBtn
                        name={'icon-pencil'}
                        width={16}
                        height={16}
                        onClick={handleEditBoard}
                      />
                      <IconBtn
                        name={'icon-trash'}
                        width={16}
                        height={16}
                        onClick={handleDeleteBoard}
                      />
                    </span>
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
            <div className={st.helpCactus}>cactus</div>
            <p className={st.helpText}>
              If you need help with <span>TaskPro</span>, check out our support
              resources or reach out to our customer support team.
            </p>
            <button className={st.helpSend} onClick={handleHelp}>
              Need help?
            </button>
          </div>
        </div>
      </section>
      <section className={st.sectionLogOut}>
        <div className={st.container}>
          <button className={st.btnLogout} onClick={handleLogout}>
            Log out
          </button>
        </div>
      </section>
      {isOpen && (
        <Modal title={'New board'} closeModal={handleModalClose}>
          <NewBoard />
        </Modal>
      )}
    </>
  );
};
