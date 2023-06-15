import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const HomePage = () => {

  return (
    <>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default HomePage;
