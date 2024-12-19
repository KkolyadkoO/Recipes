import "./styles.css"
import {observer} from "mobx-react-lite";
import Header from "../../Header";
import Footer from "../../Footer";
import ImageUpload from "../../ImageUpload";
import TitleComponent from "../../TitleComponent";
import CustomSelect from "../../CustomSelect";
import {useState} from "react";

const CreateRecipesPage = () => {
    const optionsProduct = [
        {value: "1", label: "Яйцо"},
        {value: "2", label: "Мука"},
        {value: "3", label: "Сахар"},
    ];
    const optionsType = [
        {value: "1", label: "гр."},
        {value: "2", label: "шт."},
        {value: "3", label: "мл."},
    ];
    const [images, setImages] = useState<{ [key: string]: string | null }>({});

    const handleImageChange = (key: string, file: File | null) => {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImages((prev) => ({...prev, [key]: reader.result as string}));
            };
            reader.readAsDataURL(file);
        }
    };
    const handleIngredientChange = (selectedOption: { value: string; label: string }) => {
        console.log("Selected ingredient:", selectedOption);
    };

    const handleQuantityChange = (selectedOption: { value: string; label: string }) => {
        console.log("Selected quantity type:", selectedOption);
    };
    return (<div className='wrapper'>
            <Header/>
            <div className='content'>
                <div className='createRecipesPage__title'>
                    <input type="text" placeholder="Введите название блюда"/>
                </div>
                <div className='createRecipesPage__time'>
                    <img src={"/images/clock.png"} alt="clock"/>
                    <input type="text" placeholder="0"/>
                    <p>минут</p>
                </div>
                <div className='createRecipesPage__image'>
                    <ImageUpload
                        width={80}
                        height={50}
                        image={images["main"]}
                        onChange={(file) => handleImageChange("main", file)}
                    />
                </div>

                <div className='createRecipesPage__description'>
                    <TitleComponent text="Описание"/>
                    <textarea rows={10} placeholder={"Описание блюда"}/>
                </div>
                <div className='createRecipesPage__ingredients'>
                    <TitleComponent text="ингредиенты"/>
                    <div className='createRecipesPage__ingredients__items'>
                        <CustomSelect options={optionsProduct} placeholder="Ингридиент"
                                      onChange={handleIngredientChange}/>
                        <input type="text" placeholder="0"/>
                        <CustomSelect options={optionsType} placeholder="Количество" onChange={handleQuantityChange}/>
                    </div>
                    <button className="createRecipesPage__ingredients-button">+</button>
                </div>
                <div className="createRecipesPage__instruction">
                    <TitleComponent text={"инструкция"}/>
                    <div className='createRecipesPage__instructions__items'>
                        <ImageUpload width={45} height={50} key={"instruction-upload"}
                                     image={images["instruction"]}
                                     onChange={(file) => handleImageChange("instruction", file)}/>

                        <div className='createRecipesPage__instructions__step'>
                            <div className={"createRecipesPage__instructions__step__title"}>
                                Шаг 1
                            </div>
                            <textarea rows={10} placeholder={"Текст шага"}/>
                        </div>
                    </div>
                    <button className="createRecipesPage__ingredients-button">+</button>

                </div>
                <div className="createRecipesPage__finish">
                    <button className="createRecipesPage__finish-button">Отправить рецепт на модерацию</button>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default observer(CreateRecipesPage);