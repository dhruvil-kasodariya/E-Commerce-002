import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../Categories-preview/categories-preview.componet";
import Category from "../Category/category.componet";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
