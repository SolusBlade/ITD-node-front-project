import { useEffect, useRef, useState } from "react";
import css from "./ProfileModal.module.scss";
import { useDispatch } from 'react-redux';
import { updateUser, updateAvatar } from "redux/auth/authOperations";
import sprite from '../../../assets/icons/icons.svg'

export const ProfileModal = ({ modalHandler, avatar }) => {
    const [image, setImage] = useState(null);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(image){ 
            const formData = new FormData();
            formData.append('avatar', image);
            dispatch(updateAvatar(formData));
            setImage(null);
        }

    }, [image]);

    const submitHandler = (evt) => {
        evt.preventDefault();

        const form = evt.currentTarget;
        const name = form.elements[0].value;
        const email = form.elements[1].value;
        const password = form.elements[2].value;

        dispatch(updateUser({
            name: name, 
            email: email, 
            password: password
        }));

        form.reset();
        modalHandler();
    }
    const handleFileSelect = (evt) => {
        setImage(evt.target.files[0])
    }

    return (
        <div className={css.modal}>
            <div className={css.imageContainer}>
                 {!avatar ? (
                    <svg className={css.svg}>
                        <use href={sprite + '#user-avatar-icon'}></use>
                    </svg>
                ) : (
                    <div className={css.image}>
                        <img className={css.img} src={avatar} alt="Avatar" />
                    </div>
                )}
                <div className={css.addImg}>
                    <label className={css.label} htmlFor="inputAddFile"></label>
                    <input className={css.addFile} id="inputAddFile" type="file" accept="image/png, image/jpeg" placeholder="" onChange={handleFileSelect}/>
                </div>
            </div>
            <form className={css.form} onSubmit={submitHandler}>
                <input className={css.input} type="text" placeholder="Name" />

                <input className={css.input} type="email" placeholder="Email"/>

                <input className={css.input} type="password" placeholder="Password"/>

                <button className={css.button} type="submit">Send</button>
            </form>
        </div>
    )
}