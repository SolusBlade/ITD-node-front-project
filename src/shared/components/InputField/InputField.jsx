import { Field, ErrorMessage } from 'formik';
import s from './InputField.module.scss';
import clsx from 'clsx';
const InputField = ({ name, placeholder, secendaryClassName }) => {
  return (
    <label className={s.label}>
      <Field
        className={clsx(s.input, secendaryClassName && secendaryClassName)}
        name={name}
        type="text"
        placeholder={placeholder}
      />
      <ErrorMessage name={name} component="span" className={s.errorMessage} />
    </label>
  );
};

export default InputField;
