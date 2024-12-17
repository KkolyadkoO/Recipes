import React, { useState } from "react";
import "./styles.css";
import Filters from "../Filters";
import Search from "../Search";

const DropdownFilters = () => {
    const [showFilters, setShowFilters] = useState(false);

    const toggleFilters = () => {
        setShowFilters((prev) => !prev);
    };

    return (
        <div className="filters-container">
            <div className="dropdownFilters__buttons_container">
                <button className="filter-button" onClick={toggleFilters}>
                    Фильтры
                </button>
                <Search/>
            </div>


            <div className={`filters-dropdown ${showFilters ? "visible" : ""}`}>
                <Filters/>

            </div>
        </div>
    );
};

export default DropdownFilters;
