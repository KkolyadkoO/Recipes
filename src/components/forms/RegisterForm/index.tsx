import {observer} from "mobx-react-lite";
import './styles.css';

const RegisterForm = () => {
    return (
        <div className="registerForm__container">
            <p className="registerForm__Title">Регистрация</p>
            <div className="registerForm__line"></div>
            <form className="registerForm__inputs">
                <input type="text" placeholder="Логин"/>
                <input type="email" placeholder="Email"/>
                <input type="tel" placeholder="Номер"/>
                <input type="password" placeholder="Пароль"/>
                <input type="password" placeholder="Повторите пароль"/>
                <button type={"submit"}>Зарегистрироваться</button>
            </form>
            <div className="registerForm__line"></div>
            <div className="registerForm__options">
                <p className="registerForm__options_text">Уже есть аккаунт?</p>
                <p className="registerForm__options_link">Вход</p>
            </div>
        </div>
    );
}

export default observer(RegisterForm);