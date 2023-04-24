import React from "react";
import CategoryItem from "../category-item/category-item.components";
import "./directory.sytle.scss";

const Directory = ({ categoryItems }) => {
  return (
    <div className="directory-container">
      {categoryItems.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
