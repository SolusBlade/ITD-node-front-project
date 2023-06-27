import ButtonModalWithIcon from 'components/Modal/ButtonModalWithIcon';
import { Formik, Form } from 'formik';
import InputField from 'shared/components/InputField/InputField';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { createNewColumn } from 'redux/board/boardOperations';

const initialsValue = {
  title: '',
};

const schema = yup.object().shape({
  title: yup.string().required('*Required field'),
});

const AddColumn = ({ closeModal }) => {
  const currentBoard = useSelector(state => state.board.currentBoard);
  console.log(currentBoard);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      createNewColumn({ idBoard: currentBoard, data: { title: values.title } })
    );
    closeModal();
    resetForm();
  };
  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={schema}
      initialValues={initialsValue}
    >
      <Form>
        <InputField name="title" placeholder="Title" />
        <ButtonModalWithIcon text="Add" />
      </Form>
    </Formik>
  );
};

export default AddColumn;
