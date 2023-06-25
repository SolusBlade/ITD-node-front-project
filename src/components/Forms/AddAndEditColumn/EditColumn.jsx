import ButtonModalWithIcon from 'components/Modal/ButtonModalWithIcon';
import { Formik, Form } from 'formik';
import InputField from 'shared/components/InputField/InputField';
import * as yup from 'yup';

const initialsValue = {
  title: '',
};

const schema = yup.object().shape({
  title: yup.string().required('*Required field'),
});

const handleSubmit = (values, { resetForm }) => {
  console.log(values);
  resetForm();
};

const EditColumn = () => {
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
