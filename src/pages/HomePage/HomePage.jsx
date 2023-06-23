import { Outlet } from 'react-router-dom';
import { Suspense, useState } from 'react';
import { Header } from 'components/Header/Header';
import { Sidebar } from 'components/Sidebar/Sidebar';
import Modal from 'components/Modal/Modal';
import NewBoard from '../../components/Forms/NewBoard/NewBoardForm';
import s from './HomePage.module.scss';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => setIsOpen(!isOpen);
  return (
    <>
      <Suspense fallback={null}>
        <div className={s.homeWrap}>
          <div className={s.sideBar}>
            <Sidebar />
            <button onClick={handleOpenModal} type="button">
              modalOpen
            </button>
          </div>

          <div className={s.screenWrap}>
            <Header />
            <Outlet />
          </div>
          {isOpen && (
            <Modal title="New board" closeModal={handleOpenModal}>
              <NewBoard />
            </Modal>
          )}
        </div>
      </Suspense>
    </>
  );
};

export default HomePage;
