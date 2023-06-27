import css from './Profile.module.scss';
import sprite from '../../../assets/icons/icons.svg';
import { useSelector } from 'react-redux';
import { selectName } from 'redux/auth/authSelectors';

export const Profile = ({ modalHandler, avatar }) => {
    const name = useSelector(selectName);

    return (
        <div className={css.container}>
            <div className={css.tooltip}>
                <p></p>
            </div>
            <p className={css.name}>{name}</p>
            <div className={css.avatarContainer} onClick={modalHandler}>
                {!avatar ? (
                    <svg className={css.svg}>
                        <use href={sprite + '#user-avatar-icon'}></use>
                    </svg>
                ) : (
                    <img className={css.img} src={avatar} alt="Avatar" />
                )}
            </div>
        </div>
    )
}