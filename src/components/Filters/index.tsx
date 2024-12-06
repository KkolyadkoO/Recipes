import React, {useState} from "react";
import "./styles.css"; // Import the CSS file

const Filters = () => {
    const [calories, setCalories] = useState([0, 3200]);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [includedIngredients, setIncludedIngredients] = useState("");
    const [excludedIngredients, setExcludedIngredients] = useState("");
    const [dishType, setDishType] = useState("все");
    const [cuisineType, setCuisineType] = useState("все");

    return (
        <div className="filters__container">
            <div className="filters__section">
                <div className="filters__filter-group">
                    <label>Количество калорий на блюдо:</label>
                    <input
                        type="range"
                        min="0"
                        max="3200"
                        step="100"
                        value={calories[1]}
                        onChange={(e) =>
                            setCalories([calories[0], parseInt(e.target.value, 10)])
                        }
                        className="filters__slider"
                    />
                    <div>
                        {calories[0]} ккал - {calories[1]} ккал
                    </div>
                </div>

                <div className="filters__filter-group">
                    <label>Тип блюд:</label>
                    <select
                        value={dishType}
                        onChange={(e) => setDishType(e.target.value)}
                        className="filters__dropdown"
                    >
                        <option value="все">все</option>
                        <option value="завтрак">завтрак</option>
                        <option value="обед">обед</option>
                        <option value="ужин">ужин</option>
                    </select>
                </div>

                <div className="filters__filter-group">
                    <label>Национальные кухни:</label>
                    <select
                        value={cuisineType}
                        onChange={(e) => setCuisineType(e.target.value)}
                        className="filters__dropdown"
                    >
                        <option value="все">все</option>
                        <option value="итальянская">итальянская</option>
                        <option value="японская">японская</option>
                        <option value="русская">русская</option>
                    </select>
                </div>
            </div>
            <div className="filters__section">

                <div className="filters__filter-group">
                    <label className="filters__checkbox-label">
                        <input
                            type="checkbox"
                            checked={isVegetarian}
                            onChange={(e) => setIsVegetarian(e.target.checked)}
                            className="filters__checkbox"
                        />
                        <span className="filters__custom-checkbox"></span>
                        Вегетарианское
                    </label>
                </div>

                <div className="filters__filter-group">
                    <label>Входят ингредиенты:</label>
                    <input
                        type="text"
                        placeholder="Ингредиенты разделять запятой"
                        value={includedIngredients}
                        onChange={(e) => setIncludedIngredients(e.target.value)}
                        className="filters__input"
                    />
                </div>

                <div className="filters__filter-group">
                    <label>Исключить ингредиенты:</label>
                    <input
                        type="text"
                        placeholder="Ингредиенты разделять запятой"
                        value={excludedIngredients}
                        onChange={(e) => setExcludedIngredients(e.target.value)}
                        className="filters__input"
                    />
                </div>
            </div>
        </div>
    );
};

export default Filters;
