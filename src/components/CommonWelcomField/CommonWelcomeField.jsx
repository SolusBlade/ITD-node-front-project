import { Link } from 'react-router-dom';
import s from './CommonWelcomeField.module.scss';

export const CommonWelcomeField = () => {
  return (
    <div className={s.backfield}>
      <div className={s.pageinfowrapper}>
        <img src="" alt="" width='124' height='124' className={s.picture}/>
        <div className={s.brandwrapper}>
          <img src='' alt="" width='40' height='40'/>
          <p>Task Pro</p>
        </div>
        <p>Supercharge your productivity and take control of your tasks with Task Pro - Don't wait, start achieving your goals now!</p>
        <Link to="/register" className={s.registationbutton}>Registration</Link>
        <Link to="/login" className={s.loginbutton}>Log In</Link>
      </div>
    </div>
  );
};
