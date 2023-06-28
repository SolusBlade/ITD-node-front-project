import { Outlet } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Header } from 'components/Header/Header';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { toggleSidebar } from 'redux/board/boardOperations';
import { getAllTasks } from 'redux/board/boardOperations';
import WelcomePageBoard from 'components/Bord/WelcomePageBoard/WelcomePageBoard';
import { selectBoards } from 'redux/board/boardSelectors';
import { Container } from '@mui/joy';
import { selectIsSidebar } from 'redux/board/boardSelectors';
import clsx from 'clsx';
import s from './HomePage.module.scss';

const HomePage = () => {
  const dispatch = useDispatch();
  const boards = useSelector(selectBoards);
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isMobileOpen = useSelector(selectIsSidebar);

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  const closeMobileOnBackdrop = e => {
    if (e.target === e.currentTarget) {
      dispatch(toggleSidebar(false));
    }
  };

  return (
    <>
      <Suspense fallback={null}>
        <div className={s.homeWrap}>
          {isDesktop && (
            <div className={s.sideBar}>
              <Sidebar />
            </div>
          )}

          <div className={s.screenWrap}>
            <Header />
            {boards.length > 0 ? (
              <Outlet />
            ) : (
              <Container className={s.containerWelcomeDashboard}>
                <Outlet />
                <WelcomePageBoard />
              </Container>
            )}
          </div>
        </div>

        <div
          className={clsx(s.sideBarBackDrop, isMobileOpen && s.showMobile)}
          onClick={e => closeMobileOnBackdrop(e)}
        >
          <div className={s.sideBarOpen}>
            <Sidebar />
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default HomePage;
