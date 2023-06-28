import Filters from '../Filters/Filters';
import { useState } from 'react';
import s from './HeaderDashboard.module.scss';
import Container from 'components/Container/Container';
import MainDashboard from '../MainDashboard/MainDashboard';
import { useSelector } from 'react-redux';
import {
  selectCurrentBoardBackground,
  selectCurrentBoardTitle,
} from 'redux/board/boardSelectors';
import { selectIsBoardLoading } from 'redux/board/boardSelectors';
import Loader from 'components/Loader/Loader';
import clsx from 'clsx';
import Modal from 'components/Modal/Modal';
import FilterForm from 'components/Forms/FilterForm/FilterForm';

const HeaderDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const title = useSelector(selectCurrentBoardTitle);
  const background = useSelector(selectCurrentBoardBackground);
  const isBoardLoading = useSelector(selectIsBoardLoading);
  const filterModal = true;
  const handleOpenModal = () => setIsOpen(!isOpen);

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
          <Container className={s.containerDashboard}>
            <h1 className={s.titleHeaderDashboard}>{title}</h1>
            <Filters openModal={handleOpenModal} />
          </Container>
          <Container className={s.containerMainDashboard}>
            <MainDashboard />
          </Container>
        </div>
      )}
      {isOpen && (
        <Modal
          title="Filters"
          closeModal={handleOpenModal}
          filter={filterModal}
        >
          <FilterForm />
        </Modal>
      )}
    </>
  );
};

export default HeaderDashboard;
