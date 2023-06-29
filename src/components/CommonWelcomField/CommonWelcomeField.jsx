import { Link } from 'react-router-dom';
import s from './CommonWelcomeField.module.scss';
import sprite from '../../assets/icons/icons.svg'

export const CommonWelcomeField = () => {
  return (
    <div className={s.backfield}>
      <div className={s.pageinfowrapper}>
        <div className={s.picture}></div>
        <div className={s.brandwrapper}>
          <svg className={s.icon}>
            <use href={sprite + '#icon-iconlogo'}></use>
          </svg>
          <p>Task Pro</p>
        </div>
        <p>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don't wait, start achieving your goals now!
        </p>
        <Link to="/register" className={s.registationbutton}>
          Registration
        </Link>
        <Link to="/login" className={s.loginbutton}>
          Log In
        </Link>
      </div>
    </div>
  );
};
