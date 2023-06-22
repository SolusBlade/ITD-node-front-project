import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useNavigate } from 'react';
import { registerUser } from '../../redux/auth/authOperations';
import * as yup from 'yup';
import { memo } from 'react';
import s from './Form.module.scss';
import YupPassword from 'yup-password';
import icon from '../../assets/icons/icons.svg';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);
  const initialValues = { username: '', email: '', password: '' };

 
  const handleSubmit = (values, { resetForm }) => {
    dispatch(registerUser(values));
    resetForm();
  };

  const schema = yup.object().shape({
    username: yup
      .string()
      .min(2, 'Username must be at least 2 characters')
      .max(64, 'Username must be less than or equal to 64 characters')
      .required('Username is a required field'),
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

  // const message = useSelector(selectAuthError);

  // const navigate = useNavigate();
  // const redirection = () => {
  //   const path = '/register';
  //   navigate(path);
  // };

  // const onClickHandler = () => {
  //   setPasswordShown(state => !state);
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
            <h2 className={`${s.commoncaption} ${s.accent}`}>Registration</h2>
            <h2 LogIn className={s.commoncaption}>Log In</h2>
          </div>
          
          <div className={s.fieldswrapper}>
          <label htmlFor="username">
            <Field className={s.inputfield}
              type="text"
              name="username"
              placeholder="Enter your name"
              autoComplete="off"
            />
          </label>
          <label htmlFor="email">
            <Field className={s.inputfield}
              type="text"
              name="email"
              placeholder="Enter your email"
              autoComplete="off"
            />
          </label>
          <label htmlFor="password">
            <Field className={s.inputfield}
              type="password"
              name="password"
              placeholder="Create a password"
              autoComplete="off"
            />
          </label>
          <button type="submit" className={s.submitbutton}>Register Now</button>
          </div>

        </Form>
      </Formik>
    </div>
  );
};


