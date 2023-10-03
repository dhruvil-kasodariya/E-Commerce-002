import { takeLatest, all, call, put } from "redux-saga/effects";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import {
  fetchCategoriceSuccess,
  fetchCategoriceFailed,
} from "./category.action";
import { fetchData,fetchDataWithOption } from "../../api/api";

import { CATEGORIES_ACTION_TYPES } from "./category.types";

export function* fetchCategoriceAsync() {
  try {
    const categoriesArrayWithUsd = yield call(
      getCategoriesAndDocuments,
      "categories"
    );
    // const urlExchange = "https://api.exchangerate.host/latest?base=USD";
    // const usdRate = yield fetchData(urlExchange).then((res) => res.rates.INR);
    const urlExchange = 'https://currency-exchange.p.rapidapi.com/exchange?from=USD&to=INR&q=1.0';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6b05ecea36msh09c96e711c866dep1b42b0jsn14d8613e7884',
		'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
	}
};
       const usdRate = yield fetchDataWithOption(urlExchange,options).then((res) => res.data);
    const categoriesArray = yield categoriesArrayWithUsd.map((category) => ({
      ...category,
      items: category.items.map((item) => ({
        ...item,
        price: Math.floor(item.price * usdRate),
      })),
    }));
    yield put(fetchCategoriceSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriceFailed(error));
  }
}

export function* onFetchCategorice() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORICE_START,
    fetchCategoriceAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategorice)]);
}
