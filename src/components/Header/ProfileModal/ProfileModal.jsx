import { useEffect, useRef, useState } from "react";
import css from "./ProfileModal.module.scss";
import { useSelector, useDispatch } from 'react-redux';
import { 
    selectAvatar, 
    selectUser 
} from "redux/auth/authSelectors";

export const ProfileModal = () => {
    const [imgLink, setImgLink] = useState('');
    const [image, setImage] = useState('');
    const prevImageRef = useRef(image);
    const avatar = useSelector(selectAvatar);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    let file;

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

    useEffect(()=>{
        if(file){ 
            const formData = new FormData();
            formData.append('image', image);
            // formData.append('prevImageRef', prevImageRef.current);
            // console.log('formData ', formData);
            // console.log('prevImageRef', prevImageRef);

            // dispatch(updateAvatar(formData));

            prevImageRef.current = image;
            setImage('');
        }

    }, [image]);

    const handleFileSelect = (evt) => {
        console.log(evt.target.files[0]);
        file = evt.target.value;
        // console.log('handleFile', image)
        // console.log(evt.target.value);
        // file = evt.target.files[0];
        setImage(evt.target.files[0])
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
                <div className={css.addImg}>
                    <input type="file" accept="image/png, image/jpeg" placeholder="" onChange={handleFileSelect}/>
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