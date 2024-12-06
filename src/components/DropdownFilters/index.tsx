import React, { useState } from "react";
import "./styles.css";
import Filters from "../Filters";

const DropdownFilters = () => {
    const [showFilters, setShowFilters] = useState(false);

    const toggleFilters = () => {
        setShowFilters((prev) => !prev);
    };

    return (
        <div className="filters-container">
            <button className="filter-button" onClick={toggleFilters}>
                Фильтры
            </button>
            <div className={`filters-dropdown ${showFilters ? "visible" : ""}`}>
                <Filters/>
            </div>
        </div>
    );
};

export default DropdownFilters;
