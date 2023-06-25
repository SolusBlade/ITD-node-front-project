import { Formik, Form, Field } from 'formik';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { loginUser } from '../../redux/auth/authOperations';
import * as yup from 'yup';
import s from '../RegisterForm/Form.module.scss';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);
  // const message = useSelector(selectAuthError);

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Email must be a valid email')
      .min(3, 'Email must be at least 3 characters')
      .max(64, 'Email must be less than or equal to 64 characters')
      .required('Email is a required field'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(64, 'Password must be less than or equal to 64 characters')
      .required('Password is a required field'),
  });

  const initialValues = { email: '', password: '' };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(loginUser(values));
    resetForm();
  };

  // const onClickHandler = () => {
  //   setPasswordShown(state => !state);
  // };

  // const navigate = useNavigate();
  // const redirection = () => {
  //   const path = '/register';

  //   navigate(path);
  // };

  return (
    <div className={s.formwrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className={s.registerloginwrapper}>
            <NavLink to="/register" className={s.commoncaption}>Registration</NavLink>
            <NavLink to="/login" className={`${s.commoncaption} ${s.accent}`}>
              Log In
            </NavLink>
          </div>
          <div className={s.fieldswrapper}>
            <label htmlFor="email">
              <Field
                className={s.inputfield}
                id="email"
                type="text"
                name="email"
                placeholder="Enter your email"
                autoComplete="off"
              />
            </label>
            <label htmlFor="password">
              <Field
                id="password"
                className={s.inputfield}
                type="password"
                name="password"
                placeholder="Confirm a password"
                autoComplete="off"
              />
            </label>
            <button type="submit" className={s.submitbutton}>
              Log In Now
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
