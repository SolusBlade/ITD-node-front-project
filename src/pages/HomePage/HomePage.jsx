import { Outlet } from 'react-router-dom';
import { Suspense, useState } from 'react';
import { Header } from 'components/Header/Header';
import { Sidebar } from 'components/Sidebar/Sidebar';
import s from './HomePage.module.scss';

const HomePage = () => {
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
