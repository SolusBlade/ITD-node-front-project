import { useState } from 'react';
import Icon from 'components/Icon/Icon';
import clsx from 'clsx';
import s from './IconBtn.module.scss';

const IconBtn = ({ name, width, height, btnClassName, secondaryClassName }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const iconName = hovered ? `${name}-hover` : name;

  return (
    <button
      className={clsx(s.iconBtn,
      btnClassName && btnClassName)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Icon
        name={iconName}
        width={width}
        height={height}
        secondaryClassName={secondaryClassName}
      />
    </button>
  )
}

export default IconBtn;
