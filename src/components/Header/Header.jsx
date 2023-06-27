import css from './Header.module.scss';
import { SelectTheme } from "./SelectTheme/SelectTheme";
import { Profile } from "./Profile/Profile";
import { ProfileModal } from "./ProfileModal/ProfileModal";

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { 
    selectUserTheme, 
    selectAvatar, 
} from 'redux/auth/authSelectors';
import Modal from 'components/Modal/Modal';
import { useDispatch } from 'react-redux';
import { switchTheme, toggleSidebar } from 'redux/auth/authOperations';
import sprite from '../../assets/icons/icons.svg';
import {themes} from '../../services/themes'

export const Header = () => {
    const userTheme = useSelector(selectUserTheme);
    const avatar = useSelector(selectAvatar);
    const [selectedTheme, setSelectedTheme] = useState(userTheme);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    
    useEffect(()=> {
        if (userTheme && selectedTheme === undefined) selectHandler(userTheme)
        if (selectedTheme && selectedTheme !== userTheme) {
            selectHandler(selectedTheme);
            dispatch(switchTheme(selectedTheme));
        }

    }, [selectedTheme, userTheme, dispatch, avatar]); 

    const selectHandler = (theme) => {
        const root = document.querySelector(':root');

        root.style.setProperty('--primary-background', themes[theme].primaryBackground);
        root.style.setProperty('--secondary-background', themes[theme].secondaryBackground );
        root.style.setProperty('--header-background', themes[theme].headerBackground);
        root.style.setProperty('--primary-text-color', themes[theme].primaryTextColor);
        root.style.setProperty('--secondary-text-color', themes[theme].secondaryTextColor);
        root.style.setProperty('--board-headers', themes[theme].boardHeaders);
        root.style.setProperty('--btn-bg', themes[theme].btnBg);
        root.style.setProperty('--btn-text-color', themes[theme].btnTextColor);
        root.style.setProperty('--select-header', themes[theme].selectHeader);
        root.style.setProperty('--select-option', themes[theme].selectOption);
        root.style.setProperty('--select-list-bg', themes[theme].selectListBg);
        root.style.setProperty('--select-list-border', themes[theme].selectListBorder);
        root.style.setProperty('--modal-background', themes[theme].modalBackground);
        root.style.setProperty('--btn-modal-icon-plus', themes[theme].btnModalIconPlus);
        root.style.setProperty('--btn-modal-bg', themes[theme].btnModalBg);
        root.style.setProperty('--btn-modal-text-color', themes[theme].btnModalTextColor);

        setSelectedTheme(theme);
    }

    const modalHandler = () => setIsModalOpen(!isModalOpen);

    const closeModal = () => {
        modalHandler();
    }

    return (
        // <Container>
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
                    >

                    </SelectTheme>
                    <Profile modalHandler={modalHandler} avatar={avatar}></Profile>
                </div>
                {isModalOpen && <Modal title={'Edit profile'} closeModal={closeModal}>
                    <ProfileModal modalHandler={modalHandler} avatar={avatar}></ProfileModal>
                </Modal>}
            </header>
        // </Container>
        
    )
}