import Header from "../../Header";
import React from "react";
import Footer from "../../Footer";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import "./styles.css"; // Подключаем CSS файл для стилей

const NotFoundPage = () => {
    return (
        <div className="wrapper">
            <Header />
            <div className="content notFoundPage">
                <div className="notFoundPage__content">
                    <h1 className="notFoundPage__title">404</h1>
                    <p className="notFoundPage__message">Ой, такой страницы нет!</p>
                    <p className="notFoundPage__description">
                        Возможно, она была удалена или вы ввели неправильный адрес.
                    </p>
                    <Link to="/" className="notFoundPage__button">
                        Вернуться на главную
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default observer(NotFoundPage);
