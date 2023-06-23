import { LogoComponent } from 'components/LogoComponent/LogoComponent';
import st from './Sidebar.module.scss';

export const Sidebar = () => {
  const boards = [
    {
      id: 1,
      icon: '',
      name: 'Project office',
    },
    {
      id: 2,
      icon: '',
      name: 'Neon Light Project',
    },
  ];

  const handleAddBoard = () => {
    console.log('add board');
  };

  const handleHelp = () => {
    console.log('help');
  };

  const handleLogout = () => {
    console.log('logout');
  };
  return (
    <>
      <section className={st.sectionTop}>
        <div className={st.container}>
          <div className={st.logoWrap}>
            <LogoComponent />
            <p className={st.logoText}>Task Pro</p>
          </div>

          <p className={st.boardsTitle}>My boards</p>
          <div className={st.createBoard}>
            <p>Create a new board</p>
            <button className={st.buttonCreate} onClick={handleAddBoard}>
              +
            </button>
          </div>
        </div>
      </section>
      <section className={st.sectionBoards}>
        <div className={st.container}>
          <ul className={st.boardsList}>
            {boards?.map(el => {
              return (
                <li key={el.id} className={st.boardItem}>
                  <span className={st.boardIcon}>{el.icon}</span>
                  <span className={st.boardName}>{el.name}</span>
                  <span>ed</span>
                  <span>del</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className={st.sectionHelp}>
        <div className={st.container}>
          <div className={st.helpCactus}>cactus</div>
          <p className={st.helpText}>
            If you need help with <span>TaskPro</span>, check out our support
            resources or reach out to our customer support team.
          </p>
          <button className={st.helpSend} onClick={handleHelp}>
            Need help?
          </button>
        </div>
      </section>
      <section className={st.sectionLogOut}>
        <div className={st.container}>
          <button className={st.btnLogout} onClick={handleLogout}>
            Log out
          </button>
        </div>
      </section>
    </>
  );
};
