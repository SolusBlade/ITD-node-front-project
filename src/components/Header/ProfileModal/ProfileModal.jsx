import { useState } from "react";
import css from "./ProfileModal.module.scss"

export const ProfileModal = () => {
    const [imgLink, setImgLink] = useState('');

    const submitHandler = (evt) => {
        evt.preventDefault();

        const form = evt.currentTarget;
        const name = form.elements[0].value;
        const email = form.elements[1].value;
        const password = form.elements[2].value;

        console.log('submitHandler ', evt.currentTarget.elements[0].value);
        console.log('form', name)
        console.log('form', email)
        console.log('form', password)
        // form.reset();
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
                <input className={css.input} type="text" placeholder="Name" />

                <input className={css.input} type="email" placeholder="Email"/>

                <input className={css.input} type="password" placeholder="Password"/>

                <button className={css.button} type="submit">Send</button>
            </form>
        </div>
    )
}