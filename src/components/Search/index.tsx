import "./styles.css";
import {observer} from "mobx-react-lite";
import React from "react";

const Search = () => {
    return (
        <div className="search__container">
            <input
                type="text"
                placeholder="Поиск...."
                className="search__input"
            />
            <button className="search__button">
                <img src={"/images/searchIconWhite.png"} alt="Search"/>
            </button>
        </div>
    );
}

export default observer(Search);