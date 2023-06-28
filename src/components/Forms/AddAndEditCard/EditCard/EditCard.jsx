import DateComp from 'components/DateComp/DateComp';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import InputField from 'shared/components/InputField/InputField';
import * as yup from 'yup';
import s from '../AddCard/AddCard.module.scss';
import PrioritySelector from '../PrioritySelector/PrioritySelector';
import ButtonModalWithIcon from 'components/Modal/ButtonModalWithIcon';
import { useDispatch } from 'react-redux';
import { createNewTask, updateTaskById } from 'redux/board/boardOperations';
import { useEffect, useState } from 'react';

const schema = yup.object().shape({
  title: yup.string().min(3).required('Title is a required field'),
  text: yup.string(),
  priority: yup.string(),
  deadline: yup.date().required('Deadline is a required field'),
});


const EditCard = ({ boardId, columnId, closeModal, card, onUpdate }) => {
  const dispatch = useDispatch();
  const [initialsValue, setInitialValues] = useState({
    title: card.title || '',
    text: card.text || '',
    priority: card.priority || 'none',
    deadline: card.deadline ? new Date(card.deadline) : new Date(),
  });
  // const [initialsValue, setInitialValues] = useState({
  //   title: '',
  //   text: '',
  //   priority: 'none',
  //   deadline: new Date(),
  // });

  // useEffect(() => {
  //   if (card) {
  //     setInitialValues({
  //       title: card.title,
  //       text: card.text,
  //       priority: card.priority,
  //       deadline: new Date(card.deadline),
  //     });
  //   }
  // }, [card]);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(updateTaskById({ idTask: card._id, data: {...values, boardId, columnId} }))
    const updatedCard = { ...card, ...values };
    onUpdate(updatedCard);
    resetForm();
    closeModal();
  };

  return (
    <Formik
      initialValues={initialsValue}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <InputField name="title" placeholder="Title"/>
        <Field name="text">
          {({ field }) => (
            <textarea
              {...field}
              placeholder="Text"
              className={s.textarea}
            />
          )}
        </Field>
        <p className={s.titleP}>Label color</p>
        <Field name="priority">
          {({ field }) => <PrioritySelector field={field} />}
        </Field>
        <p className={s.titleP}>Deadline</p>
        <Field name="deadline">
          {({ field }) => (
            <div className={s.datePickerContainer}>
              <DateComp
                field={field}
              />
            </div>
          )}
        </Field>
        <ErrorMessage name="deadline" component="span" className={s.errorMessage} />
        <ButtonModalWithIcon text="Edit" />
      </Form>
    </Formik>
  )
}

export default EditCard;
