import Icon from 'components/Icon/Icon';
import st from './LogoComponent.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectUserTheme } from 'redux/auth/authSelectors';

export const LogoComponent = () => {
  const theme = useSelector(selectUserTheme)
  return (
    <div className={clsx(st.iconBg, theme === "violet" && st.violet)}>
      <Icon name={'icon-iconlogo'} width={32} height={32} secondaryClassName={clsx(st.icon, theme === "violet" && st.violet)}/>
    </div>
  );
};
