import { useState, useEffect } from 'react';
import Filters from '../Filters/Filters';
import s from './HeaderDashboard.module.scss';
import Container from 'components/Container/Container';
import MainDashboard from '../MainDashboard/MainDashboard';
import WelcomePageBoard from '../WelcomePageBoard/WelcomePageBoard';
import { useSelector } from 'react-redux';
import { selectBoards, selectCurrentBoardId } from 'redux/board/boardSelectors';
import { selectIsBoardLoading } from 'redux/board/boardSelectors';
import Loader from 'components/Loader/Loader';

const HeaderDashboard = () => {
  const [title, setTitle] = useState('');
  const boards = useSelector(selectBoards);
  const currentBoardId = useSelector(selectCurrentBoardId);
  const isBoardLoading = useSelector(selectIsBoardLoading);

  useEffect(() => {
    if (!currentBoardId) {
      return;
    }
    const currentBoard = boards.filter(el => el._id === currentBoardId);
    const title = currentBoard[0].title;
    setTitle(title);
  }, [boards, currentBoardId]);

  return (
    <>
      {isBoardLoading ? (
        <Loader secondClassName={s.boardLoader} />
      ) : (
        <div className={s.headerDashboard}>
          {boards.length > 0 ? (
            <>
              <Container className={s.containerDashboard}>
                <h1 className={s.titleHeaderDashboard}>{title}</h1>
                <Filters />
              </Container>
              <Container className={s.containerMainDashboard}>
                <MainDashboard />
              </Container>
            </>
          ) : (
            <Container className={s.containerWelcomeDashboard}>
              <WelcomePageBoard />
            </Container>
          )}
        </div>
      )}
    </>
  );
};

export default HeaderDashboard;
