import css from './Header.module.scss';
import { SelectTheme } from "./components/SelectTheme";
import { Profile } from "./components/Profile";
import { useEffect, useState } from 'react';

export const Header = () => {
    let [theme, setTheme] = useState('white');
    let selectValue;
    // console.log(value);
    useEffect(()=> {
        console.log('useEffect')
        console.log(theme)

    }, [theme]); 

    const selectHandler = () => {
        const select = document.querySelector('#select-theme');
        let selectValue = select.options[select.selectedIndex].value;
        console.log('selectHandler');
        if(selectValue === 'white') {
            document.querySelector('header').style.setProperty('--primary-background', '#ffffff')
            document.querySelector('p').style.setProperty('--primary-text-color', '#121212')
            console.log(document.querySelector('p'))
            console.log('white')
            selectValue = 'white';

            setTheme(theme = 'white');
        }
        if(selectValue === 'dark') {
            document.querySelector('header').style.setProperty('--primary-background', '#121212')
            document.querySelector('p').style.setProperty('--primary-text-color', '#ffffff')
            console.log('dark')
            console.log(document.querySelector('.text'))
            selectValue = 'dark';

            setTheme( theme = 'dark')
        }
        if(selectValue === 'violet') {
            document.querySelector('header').style.setProperty('--primary-background', '#5255BC')
            console.log('violet')
            selectValue = 'violet';

            setTheme(theme = 'violet')
        }
        console.log(document.querySelector('header'))
        console.log()
    }

    return (
        <>
        <header className={css.header}>
            <SelectTheme selectHandler={selectHandler}></SelectTheme>
            <Profile></Profile>
        <div className={css.testDiv}>pook</div>

        </header>
        </>
        
    )
}