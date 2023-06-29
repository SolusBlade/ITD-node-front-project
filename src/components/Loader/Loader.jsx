import { ThreeCircles } from 'react-loader-spinner';
import s from './Loader.module.scss';
import clsx from 'clsx';

const Loader = ({secondClassName}) => {
  const root = document.querySelector(':root');
  const color = getComputedStyle(root).getPropertyValue('--sidebar-button-create-bg');
  return (
    <div className={clsx(s.backdrop, secondClassName && secondClassName)}>
      <ThreeCircles
        className={s.ThreeCircles}
        height="200"
        width="200"
        color={color}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};

export default Loader;
