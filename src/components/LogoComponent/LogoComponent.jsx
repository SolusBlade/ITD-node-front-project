import Icon from 'components/Icon/Icon';
import st from './LogoComponent.module.scss';
export const LogoComponent = () => {
  return (
    <div className={st.icon}>
      <Icon name={'icon-iconlogo'} width={32} height={32} />
    </div>
  );
};
