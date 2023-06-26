import clsx from 'clsx';
import css from './SelectTheme.module.scss';
import { useState } from "react";
import './SelectTheme.module.scss';
import sprite from '../../../assets/icons/icons.svg';
import { OutsideClicker } from './OutsideClicker';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectTheme } from 'redux/auth/authSelectors';
// import { switchTheme } from 'redux/auth/authOperations';

export const SelectTheme = ({selectHandler, userTheme, selectedTheme, setSelectedTheme}) => {
    const [isActive, setActive] = useState(false);
    // const dispatch = useDispatch();
    // let ref = useRef(userTheme);
    
    const handleClick = (event) => {
        const evtParent = event.currentTarget.parentElement;
        evtParent.children[1].classList.toggle('active');
        evtParent.children[0].children[1].classList.toggle('rotate');
        
        setActive(!isActive);
    }

    const handleSelect = (event) => {
        const theme = event.target.innerText.toLowerCase();
        if (theme !== userTheme) {
            // console.log('localTheme ', localTheme)
            // console.log('theme ', theme)
            setSelectedTheme(theme);
        }
        selectHandler(theme);
    }

    const themeCheckHandler = (selectedTheme, userTheme) => {
        return selectedTheme ? selectedTheme : userTheme;
    }

    return (
        <OutsideClicker isActive={isActive} setActive={setActive}>
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
                        handleSelect(event);
                }}>
                    <li key={1} className={clsx({
                        [css.listItem] : true,
                        [css.current] : themeCheckHandler(selectedTheme, userTheme) === 'light'
                    })}>
                        <p>Light</p>
                    </li>
                    <li key={2} className={clsx({
                        [css.listItem] : true,
                        [css.current] : themeCheckHandler(selectedTheme, userTheme) === 'dark'
                    })}>
                        <p>Dark</p>
                    </li>
                    <li key={3} className={clsx({
                        [css.listItem] : true,
                        [css.current] : themeCheckHandler(selectedTheme, userTheme) === 'violet'
                    })}>
                        <p>Violet</p>
                    </li>
                </ul>
            </div>
        </div>
        </OutsideClicker>
    )
}