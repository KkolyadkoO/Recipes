import {observer} from "mobx-react-lite";
import TitleComponent from "../TitleComponent";
import './styles.css';
import React from "react";

interface RecipeCardProps {
    title: string;
    cal: number;
    image: string;
    text: string;
    time: number;
}

const RecipeCard = ({title, image, text, time, cal}: RecipeCardProps) => {
    return (
        <div className="recipeCard__card">
            <img className="recipeCard__card__image" src={image} alt="photo"/>
            <div className="recipeCard__info">
                <TitleComponent text={title}/>
                <p>{text}</p>
                <div className="recipeCard__details">
                    <img src={"/images/clock.png"} alt="clock"/>
                    <div className="recipeCard__time">{time} минут</div>
                    <img src={"/images/cal.png"} alt="cal"/>
                    <div className="recipeCard__time">{cal} калл</div>
                    <img src={"/images/bookmark.png"} alt="bookmark"/>
                    <div className="recipeCard__time">Добавить в книгу рецептов</div>
                </div>
            </div>
        </div>
    );
}

export default observer(RecipeCard);