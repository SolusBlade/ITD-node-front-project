import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { selectBoards } from 'redux/board/boardSelectors';

const { selectIsLoggedIn } = require('redux/auth/authSelectors');

export const PublicRoute = ({ component, redirectTo = '/home' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return !isLoggedIn ? component : <Navigate to={redirectTo} />;
};

export const PrivateRoute = ({ component, redirectTo = '/welcome' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? component : <Navigate to={redirectTo} />;
};

export const BoardRoute = ({ component, redirectTo = '/home' }) => {
  const boards = useSelector(selectBoards);
  return boards.length > 0 ? component : <Navigate to={redirectTo} />;
};
