import s from "./WelcomeConainer.module.scss"

const WelcomeConainer = ({children}) => {
    return (
        <div className={s.welcomeConainer}>
            {children}
        </div>
    )
}

export default WelcomeConainer