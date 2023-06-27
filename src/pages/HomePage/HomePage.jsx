import { Outlet } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { Header } from 'components/Header/Header';
import { Sidebar } from 'components/Sidebar/Sidebar';
import s from './HomePage.module.scss';
import { useDispatch } from 'react-redux';
import { getAllTasks } from 'redux/board/boardOperations';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTasks())
  },[dispatch])
  
  const [openMobile, setOpenMobile] = useState(false);
  const closeMobileOnBackdrop = e => {
    if (e.target === e.currentTarget) {
      console.log(e);
      setOpenMobile(false);
    }
  };
  const backDropClass = openMobile ? s.sideBarBackDrop : s.hidden;
  const sideBarClass = openMobile ? s.sideBarOpen : s.sideBar;
  return (
    <>
      <Suspense fallback={null}>
        <div className={s.homeWrap}>
          <div
            className={backDropClass}
            onClick={e => closeMobileOnBackdrop(e)}
          >
            <div className={sideBarClass}>
              <Sidebar />
            </div>
          </div>
          <div className={s.screenWrap}>
            <Header />
            <Outlet />
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default HomePage;
