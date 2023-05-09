import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.style.jsx";
import { useNavigate } from "react-router-dom";

import ProductCart from "../product-card/product-card.component";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();
  console.log(products.length);
  const onHandleCategoryTitle = () => navigate(title);
  return (
    <CategoryPreviewContainer>
      <h2 onClick={onHandleCategoryTitle}>
        <Title>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products.length
          ? products
              .filter((_, idx) => idx < 4)
              .map((product) => (
                <ProductCart key={product.id} product={product} />
              ))
          : "No Match Found"}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
