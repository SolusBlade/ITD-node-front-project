import css from './Header.module.scss';
import { SelectTheme } from "./SelectTheme/SelectTheme";
import { Profile } from "./Profile/Profile";
import { ProfileModal } from "./ProfileModal/ProfileModal";

// eslint-disable-next-line
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme, selectUserTheme, selectAvatar } from 'redux/auth/authSelectors';
// import Container from 'components/Container/Container';
import Modal from 'components/Modal/Modal';
import { useDispatch } from 'react-redux';
import { switchTheme } from 'redux/auth/authOperations';
import sprite from '../../assets/icons/icons.svg'
import { toggleButtonClasses } from '@mui/material';

let themes = {
    dark: {
        primaryBackground: '#121212',
        secondaryBackground: '#1F1F1F',
        headerBackground: '#161616',
        primaryTextColor: '#FFFFFF',
        secondaryTextColor: 'rgba(255, 255, 255, 0.5)',
        boardHeaders: '#FFFFFF',
        btnBg: '#BEDBB0',
        btnTextColor: '#121212',
        selectHeader: 'rgba(255, 255, 255, 0.8)',
        selectOption: 'rgba(255, 255, 255, 0.5)',
        selectListBg: '#151515',
        selectListBorder: '#BEDBB0',
        modalBackground: '#151515'
    },
    light: {
        primaryBackground: '#FFFFFF',
        secondaryBackground: '#F6F6F7',
        headerBackground: '#FCFCFC',
        primaryTextColor: '#161616',
        secondaryTextColor: 'rgba(22, 22, 22, 0.5)',
        boardHeaders: '#161616B2',
        btnBg: '#BEDBB0',
        btnTextColor: '#161616',
        selectHeader: 'rgba(160, 160, 160, 0.8)',
        selectOption: '#161616',
        selectListBg: '#FCFCFC',
        selectListBorder: '#BEDBB0',
        modalBackground: '#FCFCFC'
    },
    violet: {
        primaryBackground: '#5255BC',
        secondaryBackground: '#ECEDFD',
        headerBackground: '#FFFFFF',
        primaryTextColor: '#161616',
        secondaryTextColor: 'rgba(255, 255, 255, 0.5)',
        boardHeaders: '#161616',
        btnBg: '#5255BC',
        btnTextColor: '#FFFFFF',
        selectHeader: 'rgba(160, 160, 160, 0.8)',
        selectOption: '#161616',
        selectListBg: '#FCFCFC',
        selectListBorder: '#ECEDFD',
        modalBackground: '#FCFCFC'
    }
}

export const Header = () => {
    const userTheme = useSelector(selectUserTheme);
    const avatar = useSelector(selectAvatar);
    const [selectedTheme, setSelectedTheme] = useState(userTheme);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    // const ref = useRef(null);
    const dispatch = useDispatch();
    // console.log('userTheme', userTheme)
    // let selectValue;
    
    useEffect(()=> {
        if (userTheme && selectedTheme === undefined) selectHandler(userTheme)
        if (selectedTheme && selectedTheme !== userTheme) {
            // console.log('useEffect ', selectedTheme);
            selectHandler(selectedTheme);
            dispatch(switchTheme(selectedTheme));
        }

    }, [selectedTheme, userTheme, dispatch, avatar]); 

    useEffect(() => {
        // console.log('sidebar ', showSidebar)
    }, [showSidebar])

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

        setSelectedTheme(theme);
    }

    const modalHandler = () => setIsModalOpen(!isModalOpen);

    const closeModal = () => {
        // console.log('closeModal');
        modalHandler();
    }

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    }

    return (
        // <Container>
            <header className={css.header}>
                <div className={css.menu} onClick={toggleSidebar}>
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
                    <div className={css.modal}>
                        <ProfileModal modalHandler={modalHandler} avatar={avatar}></ProfileModal>
                    </div>
                </Modal>}
            </header>
        // </Container>
        
    )
}