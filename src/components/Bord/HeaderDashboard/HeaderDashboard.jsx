import React from 'react';
import Filters from '../Filters/Filters';
import s from './HeaderDashboard.module.scss';
import Container from 'components/Container/Container';
import MainDashboard from '../MainDashboard/MainDashboard';
import WelcomePageBoard from '../WelcomePageBoard/WelcomePageBoard';
import { useSelector } from 'react-redux';

const HeaderDashboard = () => {
  const boards = useSelector(state => state.board.boards);

  return (
    <div className={s.headerDashboard}>
      {boards.length === 0 && (
        <Container className={s.containerWelcomeDashboard}>
          <WelcomePageBoard />
        </Container>
      )}
      {boards.length > 0 && (
        <>
          <Container className={s.containerDashboard}>
            <h1 className={s.titleHeaderDashboard}>Title</h1>
            <Filters />
          </Container>
          <Container className={s.containerMainDashboard}>
            <MainDashboard />
          </Container>
        </>
      )}
      {/* <Container className={s.containerWelcomeDashboard}>
        <WelcomePageBoard />
      </Container> */}
      {/* <Container className={s.containerDashboard}>
        <h1 className={s.titleHeaderDashboard}>Title</h1>
        <Filters />
      </Container>
      <Container className={s.containerMainDashboard}>
        <MainDashboard />
      </Container> */}
    </div>
  );
};

export default HeaderDashboard;
