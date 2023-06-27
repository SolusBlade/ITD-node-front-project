import { ThreeCircles } from 'react-loader-spinner';
import s from './Loader.module.scss';
import clsx from 'clsx';

const Loader = ({secondClassName}) => {
  return (
    <div className={clsx(s.backdrop, secondClassName && secondClassName)}>
      <ThreeCircles
        height="200"
        width="200"
        color="#3A6AF5"
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
