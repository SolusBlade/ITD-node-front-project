import Icon from 'components/Icon/Icon';
import s from './Modal.module.scss';

const ButtonModalWithIcon = ({ text }) => {
  return (
    <button type="submit" className={s.buttonModal}>
      <Icon name="icon-btn-plus" width={32} height={32} />
      <p className={s.buttonText}>{text}</p>
    </button>
  );
};

export default ButtonModalWithIcon;
