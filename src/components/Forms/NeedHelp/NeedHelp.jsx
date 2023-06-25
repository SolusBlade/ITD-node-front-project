import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import InputField from 'shared/components/InputField/InputField';
import s from './NeedHelp.module.scss';
const schema = yup.object().shape({
  email: yup.string().required('*Обовязкове поле'),
  comment: yup.string().required('*Обовязкове поле'),
});

const initialValues = {
  email: '',
  comment: '',
};

const NeedHelp = () => {
  const hendleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={hendleSubmit}
    >
      <Form>
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
