import {observer} from "mobx-react-lite";
import Header from "../../Header";
import React, { useState } from "react";
import Footer from "../../Footer";
import DropdownFilters from "../../DropdownFilters";
import RecipeCard from "../../RecipeCard";
import ReactPaginate from "react-paginate";
import './styles.css';
import Search from "../../Search";

const RecipesPage = () => {
    const recipes = [
        { id: 1, title: "Блюдо 1", time: 40, image: "/images/aboutImage.png", cal: 300, text: "Описание блюда 1" },
        { id: 2, title: "Блюдо 2", time: 40, image: "/images/aboutImage.png", cal: 300, text: "Описание блюда 2" },
        { id: 3, title: "Блюдо 3", time: 40, image: "/images/aboutImage.png", cal: 3000, text: "Описание блюда 3" },
        { id: 4, title: "Блюдо 4", time: 40, image: "/images/aboutImage.png", cal: 300, text: "Описание блюда 4" },
        { id: 5, title: "Блюдо 5", time: 40, image: "/images/aboutImage.png", cal: 300, text: "Описание блюда 5" },
        { id: 6, title: "Блюдо 6", time: 40, image: "/images/aboutImage.png", cal: 300, text: "Описание блюда 6" },
        { id: 7, title: "Блюдо 7", time: 40, image: "/images/aboutImage.png", cal: 300, text: "Описание блюда 7" },
        { id: 8, title: "Блюдо 8", time: 40, image: "/images/aboutImage.png", cal: 300, text: "Описание блюда 8" },
        { id: 9, title: "Блюдо 2", time: 40, image: "/images/aboutImage.png", cal: 300, text: "Описание блюда 2" },
        { id: 10, title: "Блюдо 3", time: 40, image: "/images/aboutImage.png", cal: 3000, text: "Описание блюда 3" },
        { id: 11, title: "Блюдо 4", time: 40, image: "/images/aboutImage.png", cal: 300, text: "Описание блюда 4" },
        { id: 12, title: "Блюдо 5", time: 40, image: "/images/aboutImage.png", cal: 300, text: "Описание блюда 5" },
        { id: 13, title: "Блюдо 6", time: 40, image: "/images/aboutImage.png", cal: 300, text: "Описание блюда 6" },
        { id: 14, title: "Блюдо 7", time: 40, image: "/images/aboutImage.png", cal: 300, text: "Описание блюда 7" },
        { id: 15, title: "Блюдо 8", time: 40, image: "/images/aboutImage.png", cal: 300, text: "Описание блюда 8" },
        { id: 16, title: "Блюдо 2", time: 40, image: "/images/aboutImage.png", cal: 300, text: "Описание блюда 2" },
        { id: 17, title: "Блюдо 3", time: 40, image: "/images/aboutImage.png", cal: 3000, text: "Описание блюда 3" },
        { id: 18, title: "Блюдо 4", time: 40, image: "/images/aboutImage.png", cal: 300, text: "Описание блюда 4" },
        { id: 19, title: "Блюдо 5", time: 40, image: "/images/aboutImage.png", cal: 300, text: "Описание блюда 5" },
        { id: 20, title: "Блюдо 6", time: 40, image: "/images/aboutImage.png", cal: 300, text: "Описание блюда 6" },
        { id: 21, title: "Блюдо 7", time: 40, image: "/images/aboutImage.png", cal: 300, text: "Описание блюда 7" },
        { id: 22, title: "Блюдо 8", time: 40, image: "/images/aboutImage.png", cal: 300, text: "Описание блюда 8" }
    ];

    const itemsPerPage = 4; // Количество карточек на одной странице
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageClick = ({ selected }: { selected: number }) => {
        setCurrentPage(selected);
    };

    const offset = currentPage * itemsPerPage;
    const currentItems = recipes.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(recipes.length / itemsPerPage);

    return (
        <div className='wrapper'>
            <Header/>
            <div className='content'>
                    <DropdownFilters/>
                <div className='recipesPage__cards'>
                    {currentItems.map(recipe => (
                        <RecipeCard
                            key={recipe.id}
                            text={recipe.text}
                            title={recipe.title}
                            time={recipe.time}
                            image={recipe.image}
                            cal={recipe.cal}
                        />
                    ))}
                </div>
                <div className='pagination'>
                    <ReactPaginate
                        previousLabel={"<"}
                        nextLabel={">"}
                        breakLabel={"..."}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination__container'}
                        activeClassName={'pagination__active'}
                        disabledClassName={'pagination__disabled'}
                    />
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default observer(RecipesPage);
