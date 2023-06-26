import css from './Profile.module.scss';
import sprite from '../../../assets/icons/icons.svg';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectName } from 'redux/auth/authSelectors';

export const Profile = ({ modalHandler, avatar }) => {
    const [imgLink, setImgLink] = useState('');
    const name = useSelector(selectName);
    // console.log(avatar.avatarURL);
    return (
        <div className={css.container}>
            <p className={css.name}>{name}</p>
            <div className={css.avatarContainer} onClick={modalHandler}>
                {!avatar.avatarURL.length === 0 ? (
                    <svg className={css.svg}>
                        <use href={sprite + '#user-avatar-icon'}></use>
                    </svg>
                ) : (
                    <img className={css.img} src={avatar.avatarURL} alt="Avatar" />
                )}
            </div>
        </div>
    )
}