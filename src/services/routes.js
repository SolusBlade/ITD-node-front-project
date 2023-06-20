import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const { selectIsLoggedIn } = require("redux/auth/authSelectors");

export const PublicRoute = ({ component, redirectTo = '/home' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return !isLoggedIn ? component : <Navigate to={redirectTo} />;
};


export const PrivateRoute = ({
  component,
  redirectTo = '/welcome',
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? component : <Navigate to={redirectTo} />;
};
