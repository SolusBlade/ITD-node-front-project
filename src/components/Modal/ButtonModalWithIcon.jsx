import Icon from 'components/Icon/Icon';
import s from './Modal.module.scss';

const ButtonModalWithIcon = ({ text, handleSubmit }) => {
  return (
    <button onSubmit={handleSubmit} type="submit" className={s.buttonModal}>
      <Icon name="icon-plus" width={28} height={28} className={s.icon} />
      <p className={s.buttonText}>{text}</p>
    </button>
  );
};

export default ButtonModalWithIcon;
