import css from './Profile.module.scss';
import sprite from '../../../assets/icons/icons.svg';
import { useSelector } from 'react-redux';
import { selectName } from 'redux/auth/authSelectors';

export const Profile = ({ modalHandler, avatar, userAvatar }) => {
    const name = useSelector(selectName);

    const checkAvatar = () => {
        if (avatar && avatar?.length > 0) {
            return avatar;
        }
        return userAvatar;
    }

    return (
        <div className={css.container}>
            <div className={css.tooltip}>
                <p></p>
            </div>
            <p className={css.name}>{name}</p>
            <div className={css.avatarContainer} onClick={modalHandler}>
                {userAvatar?.length === 0 && !avatar ? (
                    <svg className={css.svg}>
                        <use href={sprite + '#user-avatar-icon'}></use>
                    </svg>
                ) : (
                    <img className={css.img} src={`${checkAvatar()}`} alt="Avatar" />
                )}
            </div>
        </div>
    )
}