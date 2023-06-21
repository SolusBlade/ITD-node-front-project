import clsx from 'clsx';
import css from './SelectTheme.module.scss';
import { useState } from "react";
import './SelectTheme.module.scss';
import sprite from '../../../assets/icons/icons.svg';

// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const SelectTheme = ({selectHandler, selectedTheme}) => {
    const [isActive, setActive] = useState(false);

    const handleClick = (event) => {
        const evtParent = event.currentTarget.parentElement;
        evtParent.children[1].classList.toggle('active');
        evtParent.children[0].children[1].classList.toggle('rotate');
        
        setActive(!isActive);
    }

    const test = (event) => {
        // console.log('test');
        const theme = event.target.innerText.toLowerCase();
        selectHandler(theme);
        console.log(event.target.innerText.toLowerCase());
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
                    <li className={clsx(css.listItem, [isActive && css.active])}>Light</li>
                    <li className={clsx(css.listItem, [isActive && css.active])}>Dark</li>
                    <li className={clsx(css.listItem, [isActive && css.active])}>Violet</li>
                </ul>
            </div>
        </div>
    )
}