import { Fragment, useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";

import { CategoriesContext } from "../../context/categories.context";

import { CategoryContainer } from "./category.style";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  const [product, setProduct] = useState(categoriesMap[category]);

  useEffect(() => {
    setProduct(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <Fragment>
      <h1>{category.toUpperCase()}</h1>
      <CategoryContainer>
        {product &&
          product.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
