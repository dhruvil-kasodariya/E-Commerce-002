import { takeLatest, all, call, put } from "redux-saga/effects";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import {
  fetchCategoriceSuccess,
  fetchCategoriceFailed,
} from "./category.action";
import { fetchData,fetchDataWithOption } from "../../api/api";

import { CATEGORIES_ACTION_TYPES } from "./category.types";

import axios from "axios";

export function* fetchCategoriceAsync() {
  try {
    const categoriesArrayWithUsd = yield call(
      getCategoriesAndDocuments,
      "categories"
    );


    console.log(categoriesArrayWithUsd)

    const exchangeApiOption ={
    method: 'GET',
    url: 'https://currency-exchange.p.rapidapi.com/exchange',
    params: {
      from: 'USD',
      to: 'INR',
      q: '1.0'
    },
    headers: {
      'X-RapidAPI-Key': '851699852bmsha70d9d8784e0fcbp1de377jsn9b633b7242db',
      'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
    }}
    const usdRate = yield axios
      .request(exchangeApiOption)
      .then((res) => res.data);

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
