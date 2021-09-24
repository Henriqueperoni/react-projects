import React from "react";

const Categories = ({ filterItems, categories }) => {
    return (
        <div className="btn-container">
            {categories.map((categorie, index) => {
                return (
                    <button
                        type="button"
                        className="filter-btn"
                        key={index}
                        onClick={() => filterItems(categorie)}
                    >
                        {categorie}
                    </button>
                );
            })}
        </div>
    );
};

export default Categories;
