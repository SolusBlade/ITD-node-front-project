import css from './Header.module.scss';
import { SelectTheme } from './SelectTheme/SelectTheme';
import { Profile } from './Profile/Profile';
import { ProfileModal } from './ProfileModal/ProfileModal';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectUserTheme,
  selectAvatar,
  selectUserAvatar,
} from 'redux/auth/authSelectors';
import Modal from 'components/Modal/Modal';
import { useDispatch } from 'react-redux';
import { switchTheme } from 'redux/auth/authOperations';
import { toggleSidebar } from 'redux/board/boardOperations';

import sprite from '../../assets/icons/icons.svg';
import { selectHandler } from '../../services/themes';

export const Header = () => {
  const userTheme = useSelector(selectUserTheme);
  const userAvatar = useSelector(selectUserAvatar);
  const avatar = useSelector(selectAvatar);
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userTheme) selectHandler(userTheme);
  }, [userTheme]);

  useEffect(() => {
    if (selectedTheme) {
      selectHandler(selectedTheme);
      dispatch(switchTheme(selectedTheme));
    }
    return;
  }, [selectedTheme, dispatch]);

  const modalHandler = () => setIsModalOpen(!isModalOpen);

  return (
    <header className={css.header}>
      <div className={css.menu} onClick={() => dispatch(toggleSidebar(true))}>
        <svg className={css.icon}>
          <use href={sprite + '#icon-burger-menu'}></use>
        </svg>
      </div>
      <div className={css.container}>
        <SelectTheme
          selectHandler={selectHandler}
          userTheme={userTheme}
          selectedTheme={selectedTheme}
          setSelectedTheme={setSelectedTheme}
        ></SelectTheme>
        <Profile
          modalHandler={modalHandler}
          avatar={avatar}
          userAvatar={userAvatar}
        ></Profile>
      </div>
      {isModalOpen && (
        <Modal title={'Edit profile'} closeModal={modalHandler}>
          <ProfileModal
            modalHandler={modalHandler}
            avatar={avatar}
            userAvatar={userAvatar}
          ></ProfileModal>
        </Modal>
      )}
    </header>
  );
};