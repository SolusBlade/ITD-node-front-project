import { LogoComponent } from 'components/LogoComponent/LogoComponent';
import Icon from 'components/Icon/Icon';
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
        <ul className={st.boardsList}>
          {boards?.map(el => {
            const activeItem = true;
            const currentClass = activeItem ? st.boardItemActive : st.boardItem;
            return (
              <li key={el.id} className={currentClass}>
                <span className={st.boardIcon}>{el.icon}</span>
                <span className={st.boardName}>{el.name}</span>
                {activeItem && (
                  <>
                    <span className={st.boardEditIcons}>
                      <Icon name={'icon-pencil'} width={16} height={16} />
                      <Icon name={'icon-trash'} width={16} height={16} />
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </section>
      <section className={st.sectionHelp}>
        <div className={st.container}>
          <div className={st.helpWrapper}>
            <div className={st.helpCactus}>cactus</div>
            <p className={st.helpText}>
              If you need help with <span>TaskPro</span>, check out our support
              resources or reach out to our customer support team.
            </p>
            <button className={st.helpSend} onClick={handleHelp}>
              Need help?
            </button>
          </div>
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
