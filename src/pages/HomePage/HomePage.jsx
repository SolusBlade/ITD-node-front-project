import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/Header/Header';
import s from './HomePage.module.scss';

const HomePage = () => {
  return (
    <>
      <Suspense fallback={null}>
        <div className={s.homeWrap}>
          {/* <SideBar /> */}
          <div className={s.sideBar}></div>
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
