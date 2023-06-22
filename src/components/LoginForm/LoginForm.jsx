import { Formik, Form, Field } from 'formik';
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
      .min(3)
      .max(254)
      .required('Email is a required field'),
    password: yup.string().required('Password is a required field'),
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
    //   <LoginFormStyled>
    //     <Formik
    //       initialValues={initialValues}
    //       validationSchema={schema}
    //       onSubmit={handleSubmit}
    //     >
    //       <Form autoComplete="off">
    //         <Caption>Login</Caption>
    //         <FormFields>
    //           <InputWraper>
    //             <Field
    //               type="text"
    //               name="email"
    //               placeholder=" "
    //               autoComplete="off"
    //             />
    //             <label htmlFor="email">Email *</label>
    //             <ErrorMessage className="error" component="div" name="email" />
    //           </InputWraper>

    //           <InputWraper>
    //             <Field
    //               type={passwordShown ? 'text' : 'password'}
    //               name="password"
    //               placeholder=" "
    //               autoComplete="off"
    //             />
    //             <label htmlFor="password">Password *</label>
    //             <ShowPassword
    //               clickHandler={onClickHandler}
    //               isShown={passwordShown}
    //             />
    //             <ErrorMessage className="error" component="div" name="password" />
    //           </InputWraper>
    //         </FormFields>
    //         <ButtonContainer>
    //           <Button className="orange regLogbutton" type="submit">
    //             Log In
    //           </Button>
    //           <Button
    //             className="white regLogbutton"
    //             type="button"
    //             onClick={redirection}
    //           >
    //             Register
    //           </Button>
    //         </ButtonContainer>
    //       </Form>
    //     </Formik>
    //     {message && <Message>{message}</Message>}
    //   </LoginFormStyled>
    <div className={s.formwrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        
          
        <Form>
          <div className={s.registerloginwrapper}>
            <h2 className={s.commoncaption}>Registration</h2>
            <h2 LogIn className={`${s.commoncaption} ${s.accent}`}>Log In</h2>
          </div>
          
          <div className={s.fieldswrapper}>
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
