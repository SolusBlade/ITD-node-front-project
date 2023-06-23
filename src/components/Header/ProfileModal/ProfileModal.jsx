import { useState } from "react";
import css from "./ProfileModal.module.scss"

export const ProfileModal = () => {
    const [imgLink, setImgLink] = useState('');
    const submitHandler = (evt) => {
        console.log('submitHandler ')
    }

    return (
        <div className={css.modal}>
            <div className={css.header}>
                <h2>Edit profile</h2>
                <div>X</div>
            </div>
            <div className={css.image}>
                 {imgLink.length === 0 ? (
                    <svg className={css.svg}>
                        <use href=''></use>
                    </svg>
                ) : (
                    <img className={css.img} src="" alt="Avatar" />
                )}
                <div className={css.addImg}>X</div>
            </div>
            <form className={css.form} onSubmit={submitHandler}>
                <input className={css.input} id="name" type="text" placeholder="Name" />

                <input className={css.input} id="email" type="email" placeholder="Email"/>

                <input className={css.input} type="password" placeholder="Password"/>

                <button className={css.button} type="submit">Send</button>
            </form>
        </div>
    )
}