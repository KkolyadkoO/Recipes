import React from "react";
import {observer} from "mobx-react-lite";
import Header from "../../Header";
import Footer from "../../Footer";
import './styles.css';
import TitleComponent from "../../TitleComponent";
import CarouselRecommendations from "../../carousel/CarouselRecommendations";
import SubscriptionForm from "../../forms/SubscriptionForm";
import CarouselComments from "../../carousel/CarouselComments";

const HomePage = () => {
    return (
        <div className='wrapper'>
            <Header />
            <div className='content'>
                <div className="hero-section" style={{
                    background: 'url(/images/homePageImage.png) lightgray 50% / cover no-repeat',
                }}>
                    <div className="hero-overlay">
                        <h1 className="hero-title">Найди своё блюдо</h1>
                        <div className="search-bar">
                            <input
                                type="text"
                                placeholder="Поиск...."
                                className="search-input"
                            />
                            <button className="search-button">
                                <img src={"/images/searchIcon.png"} alt="Search" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="offersSection">
                    <TitleComponent text={"Вкусно только с нами"}/>
                    <p>Рецепты от популярных шефов</p>
                    <p>Собери свою уникальное меню и перестань думать, что приготовить вечером</p>
                    <p>Рецепты от популярных шефов</p>
                </div>

                <div className="aboutSection">
                    <img src={"/images/aboutImage.png"} alt="About Page" />
                    <div className="aboutText">
                        <TitleComponent text={"о нас"}/>
                        <p>ьадылрв овыыло ваоыва воатыловалоыв ыловтлы вмтоыбт тмоытвм мтывмо моывталоыврдмывтмдамымтвыдамм ам рда мдвра мд рм мдышрм дм рдшм рдышмрфшырвмдшы вмы вмы ршвм дыв мыв мывм рдышмр ыдвшрм ы</p>
                    </div>
                </div>
                <div className="recommendationsSection">
                    <TitleComponent text={"Предложения"}/>
                    <CarouselRecommendations/>
                </div>
                <div className="recommendationsSection">
                    <TitleComponent text={"Комментарии"}/>
                    <CarouselComments/>
                </div>

                <div className="subscriptionSection">
                    <TitleComponent text={"Подписка"}/>
                    <SubscriptionForm/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default observer(HomePage);