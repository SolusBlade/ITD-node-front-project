import { Field, ErrorMessage } from 'formik';
import s from './InputField.module.scss';
const InputField = ({ name, placeholder }) => {
  return (
    <label className={s.label}>
      <Field
        className={s.input}
        name={name}
        type="text"
        placeholder={placeholder}
      />
      <ErrorMessage name={name} component="span" className={s.errorMessage} />
    </label>
  );
};

export default InputField;
