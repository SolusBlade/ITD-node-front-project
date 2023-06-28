import Icon from 'components/Icon/Icon';
import clsx from 'clsx';
import s from './IconBtn.module.scss';


const IconBtn = ({ name, width, height, btnClassName, secondaryClassName, onClick }) => {
  return (
    <button
      className={clsx(s.iconBtn,
      btnClassName && btnClassName)}
      onClick={onClick}
    >
      <Icon
        name={name}
        width={width}
        height={height}
        className={"iconBtn"}
        secondaryClassName={secondaryClassName}
      />
    </button>
  )
}

export default IconBtn;
