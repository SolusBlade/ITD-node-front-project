import css from './Profile.module.scss';
import sprite from '../../../assets/icons/icons.svg';
import { useState } from 'react';

export const Profile = () => {
    const [imgLink, setImgLink] = useState('');
    return (
        <div className={css.container}>
            <p className={css.name}>Name</p>
            <div className={css.avatarContainer}>
                {imgLink.length === 0 ? (
                    <svg className={css.svg}>
                        <use href={sprite + '#user-avatar-icon'}></use>
                    </svg>
                ) : (
                    <img className={css.img} src="" alt="Avatar" />
                )}
            </div>
        </div>
    )
}