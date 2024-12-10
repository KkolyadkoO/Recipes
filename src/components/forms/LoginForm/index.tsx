import {observer} from "mobx-react-lite";
import './styles.css';

const LoginForm = () => {
    return (
        <div className="loginForm__container">
            <p className="loginForm__Title">Вход</p>
            <div className="loginForm__line"></div>
            <form className="loginForm__inputs">
                <input type="text" placeholder="Email или логин"/>
                <input type="password" placeholder="Пароль"/>
                <button type={"submit"}>Войти</button>
            </form>
            <div className="loginForm__line"></div>
            <div className="loginForm__options">
                <p className="loginForm__options_text">Вы забыли пароль?</p>
                <p className="loginForm__options_link">Восстановить</p>
            </div>
            <div className="loginForm__options">
                <p className="loginForm__options_text">Ещё не с нами?</p>
                <p className="loginForm__options_link">Регистрация</p>
            </div>
        </div>
    );
}

export default observer(LoginForm);