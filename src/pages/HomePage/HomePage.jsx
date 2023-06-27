import { Outlet } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { Header } from 'components/Header/Header';
import { Sidebar } from 'components/Sidebar/Sidebar';
import s from './HomePage.module.scss';
import { useDispatch } from 'react-redux';
import { getAllTasks } from 'redux/board/boardOperations';
// import DateComp from 'components/DateComp/DateComp';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTasks())
  },[dispatch])

  return (
    <>
      <Suspense fallback={null}>
        <div className={s.homeWrap}>
          <div className={s.sideBar}>
            <Sidebar />
          </div>
          <div className={s.screenWrap}>
            <Header />
            {/* <DateComp /> */}
            <Outlet />
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default HomePage;
