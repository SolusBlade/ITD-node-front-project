import ButtonModalWithIcon from 'components/Modal/ButtonModalWithIcon';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { updateColumnById } from 'redux/board/boardOperations';
import InputField from 'shared/components/InputField/InputField';
import * as yup from 'yup';

const initialsValue = {
  title: '',
};

const schema = yup.object().shape({
  title: yup.string().required('*Required field'),
});



const EditColumn = ({column}) => {

  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    // console.log(column);
    dispatch(updateColumnById({idColumn: column._id, idBoard: column.boardId, data: {title: values.title}}))
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
        <ButtonModalWithIcon text="Edit" />
      </Form>
    </Formik>
  );
};

export default EditColumn;
