import {observer} from "mobx-react-lite";
import Header from "../../Header";
import Footer from "../../Footer";
import './styles.css';
import {useState} from "react";
import TitleComponent from "../../TitleComponent";
import InstractionStep from "../../InstractionStep";

const RecipePage = () => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [countOfBatch, setCountOfBatch] = useState(1);

    const ingredients = [
        {ingredient: "Яйцо", count: 3, metric: "шт."},
        {ingredient: "Мука", count: 100, metric: "гр."},
    ]

    const toggleFavorite = () => {
        setIsFavorite((prevState) => !prevState);
    };
    const addCountOfBatch = () => {
        setCountOfBatch(countOfBatch + 1);
    };
    const minusCountOfBatch = () => {
        setCountOfBatch((prev) => {
            if (prev > 1) {
                return prev - 1;
            }
            return prev;
        });
    };


    return (
        <div className='wrapper'>
            <Header/>
            <div className='content recipePage__container'>
                <div className="recipePage__head">
                    <div className="recipePage__title">Брауни</div>
                    <div className="recipePage__details">
                        <img src={"/images/clock.png"} alt="clock"/>
                        <div className="recipePage__time">40 минут</div>
                        <img className="recipePage__bookmark"
                             src={isFavorite ? "/images/bookmark_filled.png" : "/images/bookmark.png"}
                             onClick={toggleFavorite} alt="bookmark"/>
                        <div
                            className="recipePage__time"> {isFavorite ? "Убрать из книги рецептов" : "Добавить в книгу рецептов"}</div>
                    </div>
                </div>
                <img className="recipePage__mainImg" src="/images/recipe/browne/main.png" alt="main"/>
                <div className="recipePage__description">
                    <TitleComponent text={'описание'}/>
                    <p>Один из самых популярных десертов в мире — брауни — был придуман в 1893 году на кухне
                        легендарного отеля Palmer House в Чикаго. Этот пирог там пекут до сих пор по оригинальному
                        рецепту, покрывая сверху абрикосовой глазурью. В домашней версии, впрочем, у брауни получается
                        такая изумительная сахарная корочка, что глазировать ее было бы преступлением. У традиционных
                        шоколадных брауни ванильный аромат, хрустящая корочка и влажная серединка. В торт также
                        добавляют грецкие орехи или фисташки, а еще клюкву.</p>
                </div>
                <div className="recipePage__ingredients">
                    <TitleComponent text={'ингредиенты'}/>
                    <div className="recipePage__batch">
                        <p>порции</p>
                        <img src="/images/minus.png" onClick={minusCountOfBatch}/>
                        <p style={{fontWeight: 500}}>{countOfBatch}</p>
                        <img src="/images/plus.png" onClick={addCountOfBatch}/>
                    </div>
                    {ingredients.map((item) => {
                        return (
                            <div className="recipePage__ingredient">
                                <p className="ingredient__name">{item.ingredient}</p>
                                <div className="ingredient__line"></div>
                                <p className="ingredient__quantity">{item.count*countOfBatch}{item.metric}</p>
                            </div>
                        );
                    })}
                </div>
                <div className="recipePage__manual">
                    <TitleComponent text={"инструкция"}/>
                    <InstractionStep
                        text={"Шоколад разломать на кусочки и вместе со сливочным маслом растопить на водяной бане, не переставая все время помешивать лопаткой или деревянной ложкой. Получившийся густой шоколадный соус снять с водяной бани и оставить остывать."}
                        step={1} imageUrl={"/images/recipe/browne/step1.png"}/>
                    <InstractionStep
                        text={"Тем временем смешать яйца со ста граммами коричневого сахара: яйца разбить в отдельную миску и взбить, постепенно добавляя сахар. Взбивать можно при помощи миксера или вручную — как больше нравится, — но не меньше двух с половиной-трех минут."}
                        step={2} imageUrl={"/images/recipe/browne/step2.png"}/>
                    <div>
                        <TitleComponent text={"Приятного аппетита"}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default observer(RecipePage);