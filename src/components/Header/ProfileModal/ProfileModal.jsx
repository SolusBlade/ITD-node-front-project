import { useEffect, useRef, useState } from "react";
import css from "./ProfileModal.module.scss";
import { useSelector, useDispatch } from 'react-redux';
// import { 
//     selectAvatar, 
//     selectUser 
// } from "redux/auth/authSelectors";
import { updateUser, updateAvatar } from "redux/auth/authOperations";
import sprite from '../../../assets/icons/icons.svg'

export const ProfileModal = ({ modalHandler }) => {
    const [imgLink, setImgLink] = useState('');
    const [image, setImage] = useState(null);
    // const prevImageRef = useRef(image);
    // const avatar = useSelector(selectAvatar);
    // const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(image){ 
            const formData = new FormData();
            formData.append('avatar', image);
            // console.log(image)
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

        // console.log('submitHandler ', evt.currentTarget.elements[0].value);
        // console.log('form', name)
        // console.log('form', email)
        // console.log('form', password)
        dispatch(updateUser({name: name, email: email, password: password}))
        form.reset();
        modalHandler();
    }
    // console.log('image 1', image)
    const handleFileSelect = (evt) => {
        setImage(evt.target.files[0])
    }

    return (
        <div className={css.modal}>
            <div className={css.image}>
                 {imgLink.length === 0 ? (
                    <svg className={css.svg}>
                        <use href={sprite + '#user-avatar-icon'}></use>
                    </svg>
                ) : (
                    <img className={css.img} src="" alt="Avatar" />
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