import {observer} from "mobx-react-lite";
import React from "react";
import './styles.css';

const Footer = () => {
    return (
        <footer className="footer">

            <h3>Контакты</h3>
            <div className="footer-contact">
                <p>recipes@gmail.com</p>
                <p>+375259039308</p>
                <p>+375259039308</p>
            </div>
            <div className="footer-rights">
                <p>
                    Все права на материалы, находящиеся на сайте recipes.com, охраняются в
                    соответствии с действующим законодательством. При любом использовании
                    материалов сайта, гиперссылка (hyperlink) на recipes.com обязательна.
                </p>
            </div>
        </footer>
    );
};

export default observer(Footer);