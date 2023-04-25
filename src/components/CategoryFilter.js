import React from "react";

function CategoryFilter({categories, selectedCategory, handleSelectedCategory}) {

  function handleCategoryClick(category){
    handleSelectedCategory(category)
  }

  const categoryButtons = categories.map((category) =>
       <button key = {category} className = {category === selectedCategory ? "selected" : ""}  onClick={(e) => handleCategoryClick(category)}>{category}</button>
       )

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;