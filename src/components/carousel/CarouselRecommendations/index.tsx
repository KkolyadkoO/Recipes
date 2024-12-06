import React, { useState } from 'react';
import './styles.css';

const CarouselRecommendations = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const items = [
        { id: 1, label: 'Паста', image: './images/carouselItem1.png' },
        { id: 2, label: 'Выпечка', image: './images/carouselItem2.png' },
        { id: 3, label: 'Завтраки', image: './images/carouselItem3.png' },
    ];

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="carousel">
            <button className="scroll-button left" onClick={handlePrev}>
                {'<'}
            </button>
            <div className="carousel-items">
                {items.map((item, index) => {
                    const isActive = index === activeIndex;
                    const isPrev = index === (activeIndex === 0 ? items.length - 1 : activeIndex - 1);
                    const isNext = index === (activeIndex === items.length - 1 ? 0 : activeIndex + 1);

                    return (
                        <div
                            key={item.id}
                            className={`carousel-item ${isActive ? 'active' : ''} ${isPrev ? 'prev' : ''} ${isNext ? 'next' : ''}`}
                        >
                            <img src={item.image} alt={item.label} />
                            <p>{item.label}</p>
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

export default CarouselRecommendations;
