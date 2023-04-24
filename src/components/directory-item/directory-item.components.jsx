import React from "react";
import {
  BackgroundImage,
  DirectoryItemContainer,
  DirectoryBodyContainer,
} from "./directory-item.style.jsx";

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryBodyContainer>
        <h2> {title}</h2>
        <p>Shop Now</p>
      </DirectoryBodyContainer>
    </DirectoryItemContainer>
  );
};

export default CategoryItem;
