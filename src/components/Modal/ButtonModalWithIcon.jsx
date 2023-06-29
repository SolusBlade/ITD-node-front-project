import Icon from 'components/Icon/Icon';
import s from './Modal.module.scss';

const ButtonModalWithIcon = ({ text }) => {
  return (
    <button type="submit" className={s.buttonModal}>
      <div className={s.iconContainer}>
        <Icon name="icon-btn-plus" width={14} height={14} className="svg" />
      </div>
      <p>{text}</p>
    </button>
  );
};

export default ButtonModalWithIcon;
