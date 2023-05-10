import { CATEGORIES_ACTION_TYPES } from "./category.types";
export const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
  searchString: null,
  priceRange: null,
};

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORICE_START:
      return { ...state, isLoading: true };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORICE_FAILED:
      return { ...state, error: payload, isLoading: false };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORICE_SUCCESS:
      return { ...state, categories: payload, isLoading: false };
    case CATEGORIES_ACTION_TYPES.SEARCH_STRING_SUCCESS:
      return { ...state, searchString: payload };
    case CATEGORIES_ACTION_TYPES.SELECTED_PRICE_RANGE:
      return { ...state, priceRange: payload };
    default:
      return state;
  }
};
