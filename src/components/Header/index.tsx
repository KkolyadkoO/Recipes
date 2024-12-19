import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import './styles.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="logo">recipes</div>
            <nav className="nav">
                <ul>
                    <li><a href="#" className="header__menu__text">главная</a></li>
                    <li><a href="#" className="header__menu__text">о нас</a></li>
                    <li><a href="#" className="header__menu__text">предложения</a></li>
                    <li><a href="#" className="header__menu__text">популярное</a></li>
                </ul>
            </nav>
            <div className="user-actions">
                <button className="login-button header__menu__text">Войти</button>
            </div>
            {/* Бургер-меню */}
            <div className="burger-menu" onClick={toggleMenu}>
                <i className="burger-menu__icon"><img className="header__icons" src="/images/burger-bar.png"/></i>
            </div>
            {/* Боковое меню */}
            <div className={`side-menu ${menuOpen ? "open" : ""}`}>
                <button className="close-btn" onClick={toggleMenu}><img className="header__icons" src="/images/close.png"/></button>
                <ul>
                <li><a href="#" className="header__menu__text">главная</a></li>
                    <li><a href="#" className="header__menu__text">о нас</a></li>
                    <li><a href="#" className="header__menu__text">предложения</a></li>
                    <li><a href="#" className="header__menu__text">популярное</a></li>
                </ul>
                <button className="login-button header__menu__text">Войти</button>
            </div>
        </header>
    );
};

export default observer(Header);
