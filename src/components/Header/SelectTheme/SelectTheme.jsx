import clsx from 'clsx';
import css from './SelectTheme.module.scss';
import { useState, useEffect } from "react";
import './SelectTheme.module.scss';
import sprite from '../../../assets/icons/icons.svg';
import { useSelector, useDispatch } from 'react-redux';
import { selectTheme } from 'redux/header/headerSelectors';
import { switchTheme } from 'redux/header/headerOperations';

export const SelectTheme = ({selectHandler}) => {
    const [isActive, setActive] = useState(false);
    const theme = useSelector(selectTheme);
    const dispatch = useDispatch();
    // console.log('selectedTheme ', selectedTheme, selectedTheme === 'dark')
    
    const handleClick = (event) => {
        const evtParent = event.currentTarget.parentElement;
        evtParent.children[1].classList.toggle('active');
        evtParent.children[0].children[1].classList.toggle('rotate');
        
        setActive(!isActive);
    }

    // useEffect(()=>{

    // }, [theme])

    const test = (event) => {
        // console.log('test');
        const theme = event.target.innerText.toLowerCase();
        selectHandler(theme);
        console.log(event.target.innerText.toLowerCase());
        dispatch(switchTheme(theme));
    }

    return (
        <div className={css.container}>   
            <div className={css.select}>
                <div className={css.selectContainer} onClick={handleClick}>
                    <p className={css.header}>Theme</p>
                    <div className={clsx(css.icon, [isActive && css.rotate])}>
                        <svg className={css.svg}>
                            <use href={sprite + '#icon-arrow-down'}></use>
                        </svg>
                    </div>
                </div>
                <ul className={clsx(css.list, [isActive && css.active])} 
                    onClick={event => {
                        handleClick(event);
                        test(event);
                }}>
                    <li key={1} className={clsx({
                        [css.listItem] : true,
                        [css.current] : theme === 'light'
                    })}>
                        <p>Light</p>
                    </li>
                    <li key={2} className={clsx({
                        [css.listItem] : true,
                        [css.current] : theme === 'dark'
                    })}>
                        <p>Dark</p>
                    </li>
                    <li key={3} className={clsx({
                        [css.listItem] : true,
                        [css.current] : theme === 'violet'
                    })}>
                        <p>Violet</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}