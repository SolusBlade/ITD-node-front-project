import Icon from 'components/Icon/Icon';
import s from './Modal.module.scss';

const ButtonDelete = ({ onClick }) => {
  return (
    <button onClick={onClick} type="button" className={s.buttonModal}>
      <div className={s.iconContainer}>
        <Icon name="icon-trash" width={14} height={14} className="svg" />
      </div>
      Delete
    </button>
  );
};

export default ButtonDelete;
