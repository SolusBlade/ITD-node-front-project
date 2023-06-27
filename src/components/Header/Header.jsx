import css from './Header.module.scss';
import { SelectTheme } from "./SelectTheme/SelectTheme";
import { Profile } from "./Profile/Profile";
import { ProfileModal } from "./ProfileModal/ProfileModal";

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { 
    selectUserTheme, 
    selectAvatar,
    selectUserAvatar 
} from 'redux/auth/authSelectors';
import Modal from 'components/Modal/Modal';
import { useDispatch } from 'react-redux';
import { switchTheme, toggleSidebar } from 'redux/auth/authOperations';
import sprite from '../../assets/icons/icons.svg';
import {themes} from '../../services/themes'

export const Header = () => {
    const userTheme = useSelector(selectUserTheme);
    const userAvatar = useSelector(selectUserAvatar);
    const avatar = useSelector(selectAvatar)
    const [selectedTheme, setSelectedTheme] = useState(userTheme);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    
    useEffect(()=> {
        console.log('useEffect selected', selectedTheme)
        console.log('useEffect user', userTheme)
        if (userTheme && selectedTheme === undefined) selectHandler(userTheme)
        if (selectedTheme && selectedTheme !== userTheme) {
            console.log('useEffect if', selectedTheme)
            selectHandler(userTheme);
            dispatch(switchTheme(selectedTheme));
        }

    }, [selectedTheme, userTheme, dispatch, userAvatar]); 

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
        root.style.setProperty('--card-bg', themes[theme].cardBg);
        root.style.setProperty('--board-add-column-btn', themes[theme].boardAddColumnBtn);
        root.style.setProperty('--board-add-column-plus', themes[theme].boardAddColumnPlus);
        root.style.setProperty('--header-modal-btn-add-file', themes[theme].headerModalBtnAddFile);
        
        // console.log('selectHandler', selectedTheme)
        // setSelectedTheme(theme);
        // console.log('selectHandler', selectedTheme)
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
                    <Profile 
                        modalHandler={modalHandler} 
                        avatar={avatar} 
                        userAvatar={userAvatar}
                    >
                    </Profile>
                </div>
                {isModalOpen && <Modal title={'Edit profile'} closeModal={closeModal}>
                    <ProfileModal 
                        modalHandler={modalHandler} 
                        avatar={avatar} 
                        userAvatar={userAvatar}
                        >    
                    </ProfileModal>
                </Modal>}
            </header>
        // </Container>
        
    )
}