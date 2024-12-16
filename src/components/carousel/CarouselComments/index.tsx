import React, {useState} from 'react';
import {useSwipeable} from 'react-swipeable';
import './styles.css';
import StarRating from "../../StarRating/StarRating";

const CarouselComments = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const items = [
        {
            id: 1,
            name: 'Наталья',
            date: "22.12.2024",
            image: './images/carouselItem1.png',
            rating: 5,
            text: "Я всегда думала, что готовка — это сложно и долго, но этот сайт изменил мое мнение! Благодаря понятным инструкциям и видео я уже приготовила несколько блюд, которые все оценили. Спасибо за вдохновение!"
        },
        {
            id: 2,
            name: 'Алексей',
            date: "30.11.2024",
            image: './images/carouselItem2.png',
            rating: 4,
            text: "Очень удобно! Сайт помог мне разнообразить меню, и теперь я готовлю гораздо чаще. Хотелось бы только больше рецептов с необычными ингредиентами. Отличная работа, продолжайте развиваться!"
        },
        {
            id: 3,
            name: 'Марина',
            date: "01.12.2024",
            image: './images/carouselItem3.png',
            rating: 3,
            text: "Этот сайт стал настоящим спасением для меня, когда гости неожиданно решили прийти на ужин. За пару часов приготовила шикарное блюдо благодаря пошаговому рецепту. Рекомендую всем, кто любит готовить быстро и вкусно!"
        },
    ];

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
    });

    return (
        <div className="carouselComments" {...swipeHandlers}>
            <button className="scroll-button left" onClick={handlePrev}>
                {'<'}
            </button>
            <div className="carouselComments-items">
                {items.map((item, index) => {
                    const isActive = index === activeIndex;
                    const isPrev = index === (activeIndex === 0 ? items.length - 1 : activeIndex - 1);
                    const isNext = index === (activeIndex === items.length - 1 ? 0 : activeIndex + 1);

                    return (
                        <div
                            key={item.id}
                            className={`carouselComments-item ${isActive ? 'active' : ''} ${isPrev ? 'prev' : ''} ${isNext ? 'next' : ''}`}
                        >
                            <div className="head">
                                <img src={item.image} alt={item.name}/>
                                <div className="carouselComments__Description">
                                    <p className={"carouselComments__Name"}>{item.name}</p>
                                    <p className={"carouselComments__Date"}>{item.date}</p>
                                    <StarRating rating={item.rating} />
                                </div>
                            </div>
                            <div className="content">
                                {item.text}
                            </div>

                        </div>
                    );
                })}
            </div>
            <button className="scroll-button right" onClick={handleNext}>
                {'>'}
            </button>
        </div>
    );
};

export default CarouselComments;
