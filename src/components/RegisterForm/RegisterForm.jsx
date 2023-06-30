import { Formik, Form, Field, ErrorMessage } from 'formik';
// eslint-disable-next-line
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { registerUser } from '../../redux/auth/authOperations';
import * as yup from 'yup';
import s from './Form.module.scss';
import ss from '../CommonWelcomField/CommonWelcomeField.module.scss'
import sprite from '../../assets/icons/icons.svg';
import { NavLink } from 'react-router-dom';
import { Notify } from 'notiflix';
import { selectError } from 'redux/auth/authSelectors';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);
  const isAuthError = useSelector(selectError)

  // eslint-disable-next-line
  const [existError, setExistError] = useState(false);

  const items = localStorage.getItem('regValues');

  let data = { name: '', email: '', password: '' };
  if (items) {
    data = JSON.parse(items);
  }
  const initialValues = {
    name: data.name,
    email: data.email,
    password: data.password,
  };

  useEffect(() => {
    let error = "";
    if (isAuthError === "Request failed with status code 409") error = "User with this email already exists";
    if (error === "") return
    Notify.failure(
        error,
        {
          timeout: 2000,
        },
      );
  }, [isAuthError])

  const handleSubmit = async values => {
      localStorage.setItem('regValues', JSON.stringify(values));
      await dispatch(registerUser(values));
      localStorage.setItem(
        'regValues',
        JSON.stringify({ name: '', email: '', password: '' })
      );
  };

  // usercc@mail.com

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(2, 'Username must be at least 2 characters')
      .max(32, 'Username must be less than or equal to 32 characters')
      .matches(/^[^\u0400-\u04FF]+$/, 'Username cannot contain Cyrillic characters')
      .required('Username is a required field'),
    email: yup
      .string()
      .email('Email must be a valid email')
      .min(3, 'Email must be at least 3 characters')
      .max(64, 'Email must be less than or equal to 64 characters')
      .matches(/^[^\u0400-\u04FF]+$/, 'Email cannot contain Cyrillic characters')
      .required('Email is a required field'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(64, 'Password must be less than or equal to 64 characters')
      .matches(/^[^\u0400-\u04FF]+$/, 'Password cannot contain Cyrillic characters')
      .required('Password is a required field'),
  });

  // const message = useSelector(selectAuthError);

  // const navigate = useNavigate();
  // const redirection = () => {
  //   const path = '/register';
  //   navigate(path);
  // };

  const hidePassword = () => {
    setPasswordShown(state => !state);
  };

  return (
    <div className={ss.backfield}>
      <div className={s.formwrapper}>
        {existError && <div>Email is already exist</div>}

        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className={s.registerloginwrapper}>
              <NavLink
                to="/register"
                className={`${s.commoncaption} ${s.accent}`}
              >
                Registration
              </NavLink>
              <NavLink to="/login" className={s.commoncaption}>
                Log In
              </NavLink>
            </div>
            <div className={s.fieldswrapper}>
              <label htmlFor="name" className={s.namefield}>
                <Field
                  className={s.inputfield}
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  autoComplete="off"
                />
                <ErrorMessage
                  className={s.errorMessage}
                  component="span"
                  name="name"
                />
              </label>
              <label htmlFor="email" className={s.loginfield}>
                <Field
                  className={s.inputfield}
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  autoComplete="off"
                />
                <ErrorMessage
                  className={s.errorMessage}
                  component="span"
                  name="email"
                />
              </label>
              <label htmlFor="password" className={s.passwordfield}>
                <Field
                  className={s.inputfield}
                  type={passwordShown ? 'text' : 'password'}
                  name="password"
                  placeholder="Create a password"
                  autoComplete="off"
                />
                {passwordShown ? (
                  <svg onClick={() => hidePassword()} className={s.eye}>
                    <use href={sprite + '#icon-eye'}></use>
                  </svg>
                ) : (
                  <svg onClick={() => hidePassword()} className={s.eye}>
                    <use href={sprite + '#icon-eye-blocked'}></use>
                  </svg>
                )}
                <ErrorMessage
                  className={s.errorMessage}
                  component="span"
                  name="password"
                />
              </label>
              <button type="submit" className={s.submitbutton}>
                Register Now
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
