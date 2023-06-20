import css from './Header.module.scss';
import { SelectTheme } from "./SelectTheme/SelectTheme";
import { Profile } from "./Profile/Profile";
import { useEffect, useState } from 'react';

export const Header = () => {
    let [theme, setTheme] = useState('dark');
    let selectValue;
    
    let themes = {
        dark: {
            primaryBackground: '#121212',
            secondaryBackground: '#1F1F1F',
            headerBackground: '#161616',
            primaryTextColor: '#FFFFFF',
            secondaryTextColor: 'rgba(255, 255, 255, 0.5)',
            boardHeaders: '#FFFFFF',
            btnBg: '#BEDBB0',
            btnTextColor: '#121212'
        },
        light: {
            primaryBackground: '#FFFFFF',
            secondaryBackground: '#F6F6F7',
            headerBackground: '#FCFCFC',
            primaryTextColor: '#161616',
            secondaryTextColor: 'rgba(22, 22, 22, 0.5)',
            boardHeaders: '#161616B2',
            btnBg: '#BEDBB0',
            btnTextColor: '#161616'
        },
        violet: {
            primaryBackground: '#5255BC',
            secondaryBackground: '#ECEDFD',
            headerBackground: '#FFFFFF',
            primaryTextColor: '#161616',
            secondaryTextColor: 'rgba(255, 255, 255, 0.5)',
            boardHeaders: '#161616',
            btnBg: '#5255BC',
            btnTextColor: '#FFFFFF'
        }
    }

    // console.log(value);
    // useEffect(()=> {
    //     console.log('useEffect')
    //     console.log(theme)

    // }, [theme]); 

    const selectHandler = () => {
        // const {dark, white, violet} = themes;
        const root = document.querySelector(':root');
        const select = document.querySelector('#select-theme');
        let selectValue = select.options[select.selectedIndex].value;

        root.style.setProperty('--primary-background', themes[selectValue].primaryBackground);
        root.style.setProperty('--secondary-background', themes[selectValue].secondaryBackground );
        root.style.setProperty('--header-background', themes[selectValue].headerBackground);
        root.style.setProperty('--primary-text-color', themes[selectValue].primaryTextColor);
        root.style.setProperty('--secondary-text-color', themes[selectValue].secondaryTextColor);
        root.style.setProperty('--board-headers', themes[selectValue].boardHeaders);
        root.style.setProperty('--btn-bg', themes[selectValue].btnBg);
        root.style.setProperty('--btn-text-color', themes[selectValue].btnTextColor);

        // console.log('selectHandler', selectValue);
        // console.log('selectHandler', themes[selectValue]);
        
        // console.log()
    }

    return (
        <header className={css.header}>
            <div className={css.container}>
                <SelectTheme selectHandler={selectHandler}></SelectTheme>
                <Profile></Profile>
            </div>
        </header>
    )
}