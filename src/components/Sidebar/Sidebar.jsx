import { LogoComponent } from 'components/LogoComponent/LogoComponent';
import st from './Sidebar.module.scss';

export const Sidebar = () => {
  return (
    <>
      <div className={st.section}>
        <div className={st.container}>
          <div className={st.logoWrap}>
            <LogoComponent />
            <p className={st.logoText}>Task Pro</p>
          </div>
        </div>
      </div>
    </>
  );
};
