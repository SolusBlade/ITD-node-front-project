import { Formik, Form, Field } from 'formik';
// eslint-disable-next-line
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line
import { useState, useNavigate } from 'react';
import { registerUser } from '../../redux/auth/authOperations';
import * as yup from 'yup';
// eslint-disable-next-line
import { memo } from 'react';
import s from './Form.module.scss';
// eslint-disable-next-line
import YupPassword from 'yup-password';
// eslint-disable-next-line
import icon from '../../assets/icons/icons.svg';
import { NavLink } from 'react-router-dom';
import Icon from 'components/Icon/Icon';


export const RegisterForm = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [passwordShown, setPasswordShown] = useState(false);
  const initialValues = { name: '', email: '', password: '' };

 
  const handleSubmit = (values, { resetForm }) => {
    dispatch(registerUser(values));
    resetForm();
  };

  const schema = yup.object().shape({
    name: yup
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
            <NavLink to="/register" className={`${s.commoncaption} ${s.accent}`}>Registration</NavLink>
            <NavLink to="/login" className={s.commoncaption}>Log In</NavLink>
          </div>
          
          <div className={s.fieldswrapper}>
          <label htmlFor="name">
            <Field className={s.inputfield}
              type="text"
              name="name"
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
            <Field className={`${s.inputfield} ${s.passwordfield}`}
              type="password"
              name="password"
              placeholder="Create a password"
              autoComplete="off"
            />
            <Icon name={'icon-eye'} width={18} height={18} className={s.eye}></Icon>
          </label>
          <button type="submit" className={s.submitbutton}>  Register Now</button>
          </div>

        </Form>
      </Formik>
    </div>
  );
};


