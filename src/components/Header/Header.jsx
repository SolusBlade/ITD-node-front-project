import css from './Header.module.scss';
import { SelectTheme } from "./SelectTheme/SelectTheme";
import { Profile } from "./Profile/Profile";
import { ProfileModal } from "./ProfileModal/ProfileModal";

// eslint-disable-next-line
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/auth/authSelectors';
// import Container from 'components/Container/Container';
import Modal from 'components/Modal/Modal';



export const Header = () => {
    const userTheme = useSelector(selectTheme);
    const [selectedTheme, setTheme] = useState('dark');
    const ref = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // let selectValue;
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
            selectListBorder: '#BEDBB0'
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
            selectListBorder: '#BEDBB0'
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
            selectListBorder: '#ECEDFD'
        }
    }
    
    useEffect(()=> {
        // console.log('useEffect')
        // console.log(selectedTheme)
        // console.log(isModalOpen)

    }, [selectedTheme, isModalOpen]); 

    const selectHandler = (theme) => {
        const root = document.querySelector(':root');
        // const selectValue = event.target.value;

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

        setTheme(theme);
        // console.log('selectHandler', selectValue);
        // console.log('selectHandler', themes[selectValue]);
        
        // console.log()
    }

    const modalHandler = () => setIsModalOpen(!isModalOpen);

    const closeModal = () => {
        // console.log('closeModal');
        modalHandler();
    }

    return (
        // <Container>
            <header className={css.header}>
                <div className={css.container}>
                    <SelectTheme selectHandler={selectHandler}></SelectTheme>
                    <Profile modalHandler={modalHandler}></Profile>
                </div>
                {isModalOpen && <Modal title={'Edit profile'} closeModal={closeModal}>
                    <div className={css.modal}>
                        <ProfileModal modalHandler={modalHandler}></ProfileModal>
                    </div>
                </Modal>}
            </header>
        // </Container>
        
    )
}