import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import {Header} from './Header/Header';
// import ModalRegister from './ModalRegister/ModalRegister';
// import ModalLogin from './ModalLogin/ModalLogin';

import Loader from './Loader/Loader';

// eslint-disable-next-line
const HomePage = lazy(() => import('pages/HomePage/HomePage'));

const App = () => {
  const isLoading = false;

  return (
    <>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/welcome"
              element={<h1>Welcome</h1>}
            />
            {/* <Route
              path="/auth"
              element={<PublicRoute component={<AuthPage />} />}
            >
              <Route path="login" exact element={<Login />} />
              <Route path="register" exact element={<Register />} />
            </Route> */}
            {/* <Route
              path="/home"
              element={<PrivateRoute component={<HomePage />} />}
            >
              <Route path=":boardName" element={<></>} />
            </Route> */}

            <Route path="*" element={<Navigate to="/welcome" />} />
          </Routes>
        </Suspense>
      )}
      {/* <ToastContainer
        position="center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{
          width: '700px',
          height: '200px',
          fontSize: '24px',
          lineHeight: '36px',
        }}
      /> */}
    </>
  );
};

export default App;
