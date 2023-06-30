import { Formik, Form, Field, ErrorMessage } from 'formik';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { loginUser } from '../../redux/auth/authOperations';
import * as yup from 'yup';
import s from '../RegisterForm/Form.module.scss';
import ss from '../CommonWelcomField/CommonWelcomeField.module.scss';
import sprite from '../../assets/icons/icons.svg';
import { selectError } from 'redux/auth/authSelectors';
import { Notify } from 'notiflix';


export const LoginForm = () => {
  const dispatch = useDispatch();
  const isAuthError = useSelector(selectError)

  const [passwordShown, setPasswordShown] = useState(false);

  const schema = yup.object().shape({
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

  const items = localStorage.getItem('logValues');

  let data = { email: '', password: '' };
  if (items) {
    data = JSON.parse(items);
  }
  const initialValues = {
    email: data.email,
    password: data.password,
  };

  useEffect(() => {
    let error = "";
    if (isAuthError === "Request failed with status code 401") error = "Email or password is wrong";
    if (error === "") return
    Notify.failure(
        error,
        {
          timeout: 2000,
        },
      );
  }, [isAuthError])

  const handleSubmit = async values => {
    localStorage.setItem('logValues', JSON.stringify(values));
    await dispatch(loginUser(values));
    localStorage.setItem(
        'logValues',
        JSON.stringify({ email: '', password: '' })
      );
  };

  const hidePassword = () => {
    setPasswordShown(state => !state);
  };

  // const navigate = useNavigate();
  // const redirection = () => {
  //   const path = '/register';

  //   navigate(path);
  // };

  return (
    <div className={ss.backfield}>
      <div className={s.formwrapper}>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className={s.registerloginwrapper}>
              <NavLink to="/register" className={s.commoncaption}>
                Registration
              </NavLink>
              <NavLink to="/login" className={`${s.commoncaption} ${s.accent}`}>
                Log In
              </NavLink>
            </div>
            <div className={s.fieldswrapper}>
              <label htmlFor="email" className={s.loginfield}>
                <Field
                  className={s.inputfield}
                  id="email"
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
                  id="password"
                  type={passwordShown ? 'text' : 'password'}
                  name="password"
                  placeholder="Confirm a password"
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
                Log In Now
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
