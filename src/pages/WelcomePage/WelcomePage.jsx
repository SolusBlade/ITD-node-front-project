import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import s from './WelcomePage.module.scss';
import { useDispatch } from 'react-redux';
import { loginUser, registerUser } from 'redux/auth/authOperations';

const WelcomePage = () => {
  const dispatch = useDispatch();

  const regUser = {
    name: 'User Name',
    email: 'user1111@example.com',
    password: 'qwerty123',
  };

  const logUser = {
    email: 'user1111@example.com',
    password: 'qwerty123',
  };

  const hendleRegClick = () => {
    dispatch(registerUser(regUser));
  }

  const hendleLogClick = () => {
    dispatch(loginUser(logUser));
  };

  return (
    <>
      <Suspense fallback={null}>
        <button onClick={hendleRegClick}>register</button>
        <button onClick={hendleLogClick}>login</button>
        <h1>Welcome</h1>
        <Outlet />
      </Suspense>
    </>
  );
};

export default WelcomePage;
