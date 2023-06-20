import { Outlet } from 'react-router-dom';
import { Suspense, useState } from 'react';
import { Header } from 'components/Header/Header';
import s from './HomePage.module.scss';
import Modal from 'components/Modal/Modal';
import ButtonModalWithIcon from 'components/Modal/ButtonModalWithIcon';
import NewBoard from '../../components/Forms/NewBoard/NewBoardForm';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => setIsOpen(!isOpen);

  return (
    <>
      <Suspense fallback={null}>
        <div className={s.homeWrap}>
          {/* <SideBar /> */}
          <div className={s.sideBar}>
            <button onClick={handleOpenModal} type="button">
              modalOpen
            </button>
          </div>
          <div className={s.screenWrap}>
            <Header />
            <Outlet />
          </div>
        </div>
        {isOpen && (
          <Modal title="New board" closeModal={handleOpenModal}>
            <NewBoard />
            <ButtonModalWithIcon text={'Add board'} />
          </Modal>
        )}
      </Suspense>
    </>
  );
};

export default HomePage;
