//import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

// export const setCategories = (categoriesArray) =>
//   createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);

export const fetchCategoriceStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORICE_START);

export const fetchCategoriceSuccess = (categoriesArray) =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORICE_SUCCESS,
    categoriesArray
  );

export const fetchCategoriceFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORICE_FAILED, error);

export const searchStringAction = (searchString) =>
  createAction(CATEGORIES_ACTION_TYPES.SEARCH_STRING_SUCCESS, searchString);

export const selectedPriceRangeAction = (priceRange) =>
  createAction(CATEGORIES_ACTION_TYPES.SELECTED_PRICE_RANGE, priceRange);

// export const fetchCategoriceAsync = () => async (dispatch) => {
//   dispatch(fetchCategoriceStart());
//   try {
//     const categoriesArray = await getCategoriesAndDocuments("categories");
//     dispatch(fetchCategoriceSuccess(categoriesArray));
//   } catch (error) {
//     dispatch(fetchCategoriceFailed(error));
//   }
// };
