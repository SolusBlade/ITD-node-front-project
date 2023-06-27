import { Link } from 'react-router-dom';
import s from './CommonWelcomeField.module.scss';
import Icon from '../Icon/Icon'

export const CommonWelcomeField = () => {
  return (
    <div className={s.backfield}>
      <div className={s.pageinfowrapper}>
        {/* <img src="src/components/CommonWelcomField/themeimaige.png" alt="themelogo" className={s.picture}/> */}
        <div className={s.picture}></div>
        <div className={s.brandwrapper}>
          <Icon name={'icon-iconlogo'} width={40} height={40}></Icon>
          <p>Task Pro</p>
        </div>
        <p>Supercharge your productivity and take control of your tasks with Task Pro - Don't wait, start achieving your goals now!</p>
        <Link to="/register" className={s.registationbutton}>Registration</Link>
        <Link to="/login" className={s.loginbutton}>Log In</Link>
      </div>
    </div>
  );
};
