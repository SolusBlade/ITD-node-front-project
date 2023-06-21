import css from './Header.module.scss';
import { SelectTheme } from "./SelectTheme/SelectTheme";
import { Profile } from "./Profile/Profile";
import { useEffect, useState } from 'react';
import './Header.css';


export const Header = () => {
    let [selectedTheme, setTheme] = useState('dark');
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

    }, [selectedTheme]); 

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


    return (
        <header className={css.header}>
            <div className={css.container}>
                <SelectTheme selectHandler={selectHandler} selectedTheme={selectedTheme}></SelectTheme>
                <Profile></Profile>
            </div>
            {/* <Button>Test button</Button> */}
        </header>
    )
}