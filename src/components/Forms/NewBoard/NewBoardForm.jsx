import Icon from 'components/Icon/Icon';
import { Formik, Form, Field } from 'formik';
import s from './NewBoard.module.scss';

const NewBoard = () => {
  return (
    <Formik>
      <Form>
        <Field className={s.title} type="text" placeholder="Title" />
        <div id="my-radio-group">Icons</div>
        <div role="group" aria-labelledby="my-radio-group">
          <Field
            checked
            type="radio"
            name="icons"
            value={<Icon name="icon-plus" width={18} height={18} />}
          />
          <Field
            type="radio"
            name="icons"
            value={<Icon name="icon-plus" width={18} height={18} />}
          />
          <Field
            type="radio"
            name="icons"
            value={<Icon name="icon-plus" width={18} height={18} />}
          />
          <Field
            type="radio"
            name="icons"
            value={<Icon name="icon-plus" width={18} height={18} />}
          />
          <Field
            type="radio"
            name="icons"
            value={<Icon name="icon-plus" width={18} height={18} />}
          />
          <Field
            type="radio"
            name="icons"
            value={<Icon name="icon-plus" width={18} height={18} />}
          />
          <Field
            type="radio"
            name="icons"
            value={<Icon name="icon-plus" width={18} height={18} />}
          />
          <Field
            type="radio"
            name="icons"
            value={<Icon name="icon-plus" width={18} height={18} />}
          />
        </div>
      </Form>
    </Formik>
  );
};

export default NewBoard;
