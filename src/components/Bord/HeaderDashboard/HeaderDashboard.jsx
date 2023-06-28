import Filters from '../Filters/Filters';
import s from './HeaderDashboard.module.scss';
import Container from 'components/Container/Container';
import MainDashboard from '../MainDashboard/MainDashboard';
import WelcomePageBoard from '../WelcomePageBoard/WelcomePageBoard';
import { useSelector } from 'react-redux';
import {
  selectBoards,
  selectCurrentBoardBackground,
  selectCurrentBoardTitle,
} from 'redux/board/boardSelectors';
import { selectIsBoardLoading } from 'redux/board/boardSelectors';
import Loader from 'components/Loader/Loader';
import clsx from 'clsx';

const HeaderDashboard = () => {
  const title = useSelector(selectCurrentBoardTitle);
  const background = useSelector(selectCurrentBoardBackground);
  const boards = useSelector(selectBoards);
  const isBoardLoading = useSelector(selectIsBoardLoading);
  console.log(background);
  return (
    <>
      {isBoardLoading ? (
        <Loader secondClassName={s.boardLoader} />
      ) : (
        <div
          className={clsx(
            s.headerDashboard,
            background === 'sky' && s.sky,
            background === 'yacht' && s.yacht,
            background === 'flowers' && s.flowers,
            background === 'leaves' && s.leaves,
            background === 'mountainsAndBalloon' && s.mountainsAndBalloon,
            background === 'nature' && s.nature,
            background === 'oceanAndYacht' && s.oceanAndYacht,
            background === 'orangePlanet' && s.orangePlanet,
            background === 'planets' && s.planets,
            background === 'rocksAndOcean' && s.rocksAndOcean,
            background === 'sakura' && s.sakura,
            background === 'skyBalloons' && s.skyBalloons,
            background === 'starsAndShine' && s.starsAndShine,
            background === 'trailerInTheCanyon' && s.trailerInTheCanyon,
            background === 'youngMonth' && s.youngMonth
          )}
        >
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
