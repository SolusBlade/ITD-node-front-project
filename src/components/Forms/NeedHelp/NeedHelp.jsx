import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import InputField from 'shared/components/InputField/InputField';
import s from './NeedHelp.module.scss';
const schema = yup.object().shape({
  email: yup
    .string()
    .email('Email must be a valid email')
    .min(3, 'Email must be at least 3 characters')
    .max(64, 'Email must be less than or equal to 64 characters')
    .required('Email is a required field'),
  comment: yup.string().trim().required('Comment is a required field'),
});

const initialValues = {
  email: '',
  comment: '',
};

const NeedHelp = ({ closeModal }) => {
  const hendleSubmit = (values, { resetForm }) => {
    const obj = {
      email: values.email,
      comment: values.comment,
    };
    closeModal();
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={hendleSubmit}
    >
      <Form autoComplete="off">
        <InputField name="email" placeholder="Email address" />
        <label className={s.label}>
          <Field
            as="textarea"
            name="comment"
            placeholder="Comment"
            className={s.textarea}
          />
          <ErrorMessage
            name="comment"
            component="span"
            className={s.errorMessage}
          />
        </label>
        <button type="submit" className={s.button}>
          Send
        </button>
      </Form>
    </Formik>
  );
};

export default NeedHelp;
