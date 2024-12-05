import {observer} from "mobx-react-lite";
import React from "react";
import './styles.css';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                recipes
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="#" className='header__menu__text'>главная</a></li>
                    <li><a href="#" className='header__menu__text'>о нас</a></li>
                    <li><a href="#" className='header__menu__text'>предложения</a></li>
                    <li><a href="#" className='header__menu__text'>популярное</a></li>
                </ul>
            </nav>
            <div className="user-actions">
                <button className="login-button header__menu__text" >Войти</button>
                {/*<div className="user-icon">*/}
                {/*    <i className="fa fa-user-circle" aria-hidden="true"></i>*/}
                {/*</div>*/}
            </div>
        </header>
    );
};

export default observer(Header);