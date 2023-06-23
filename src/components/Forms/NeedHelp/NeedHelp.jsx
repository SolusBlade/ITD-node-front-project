import { Formik, Form } from 'formik';
import ButtonModalWithIcon from 'components/Modal/ButtonModalWithIcon';
import * as yup from 'yup';
import s from './NewBoard.module.scss';

// const schema = yup.object().shape({
//   title: yup
//     .string()
//     .min(2, '*Не меньше 2 символів')
//     .required('*Обовязкове поле'),
// });

const NeedHelp = () => {
  return (
    <Formik>
      <Form>
        <ButtonModalWithIcon />
      </Form>
    </Formik>
  );
};

export default NeedHelp;
