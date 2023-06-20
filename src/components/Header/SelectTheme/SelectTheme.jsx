import css from './SelectTheme.module.scss'
// eslint-disable-next-line
import { useEffect } from "react";

export const SelectTheme = ({selectHandler}) => {
    
    return (
        <div className={css.container}>
            <label htmlFor="select-theme" className={css.label}>Theme</label>
            <select name="theme" id="select-theme" onChange={selectHandler}>
                <option value="dark">Dark</option>
                <option value="light">White</option>
                <option value="violet">Violet</option>
            </select>
        </div>
    )
}