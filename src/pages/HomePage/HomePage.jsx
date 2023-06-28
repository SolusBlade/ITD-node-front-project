import { Outlet } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Header } from 'components/Header/Header';
import { Sidebar } from 'components/Sidebar/Sidebar';
// import { toggleSidebar } from 'redux/auth/authOperations';
import { toggleSidebar } from 'redux/board/boardOperations';
import { getAllTasks } from 'redux/board/boardOperations';
// import { selectIsSidebar } from 'redux/auth/authSelectors';
import { selectIsSidebar } from 'redux/board/boardSelectors';

import s from './HomePage.module.scss';

const HomePage = () => {
  const dispatch = useDispatch();
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isMobileOpen = useSelector(selectIsSidebar);

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  const closeMobileOnBackdrop = e => {
    if (e.target === e.currentTarget) {
      console.log(e.target);
      console.log(e.currentTarget);
      console.log(isMobileOpen);
      // setOpenMobile(false);
      dispatch(toggleSidebar(false));
    }
  };
  // const backDropClass = openMobile ? s.sideBarBackDrop : s.hidden;
  // const sideBarClass = openMobile ? s.sideBarOpen : s.sideBar;
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
            <Outlet />
          </div>
        </div>
        {!isDesktop && isMobileOpen && (
          <div
            className={s.sideBarBackDrop}
            onClick={e => closeMobileOnBackdrop(e)}
          >
            <div className={s.sideBarOpen}>
              <Sidebar />
            </div>
          </div>
        )}
      </Suspense>
    </>
  );
};

export default HomePage;
