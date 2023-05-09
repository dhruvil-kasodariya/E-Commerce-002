import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

//memoririce

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    return categoriesSlice.categories;
  }
);

export const selectCategoriesMapzero = createSelector(
  [selectCategories],
  (categories) => {
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);

export const selectSearchString = createSelector(
  [selectCategoryReducer],
  (categories) => {
    return categories.searchString;
  }
);

export const selectCategoriesMap = createSelector(
  [selectCategoriesMapzero, selectSearchString],
  (categoriesWithSearch, searchString) =>
    Object.keys(categoriesWithSearch).length !== 0
      ? {
          hats: categoriesWithSearch.hats.filter((item) =>
            item.name.startsWith(searchString)
          ),
          jackets: categoriesWithSearch.jackets.filter((item) =>
            item.name.startsWith(searchString)
          ),
          mens: categoriesWithSearch.mens.filter((item) =>
            item.name.startsWith(searchString)
          ),
          sneakers: categoriesWithSearch.sneakers.filter((item) =>
            item.name.startsWith(searchString)
          ),
        }
      : categoriesWithSearch
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
