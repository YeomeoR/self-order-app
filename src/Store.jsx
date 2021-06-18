import React, { createContext, useReducer } from 'react';
import {
  CATEGORY_LIST_SUCCESS,
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  ORDER_SET_TYPE,
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_FAIL,
} from './constants';

export const Store = createContext();

const initialState = {
  categoryList: { loading: true },
  productList: { loading: true },
  order: {
    orderType: 'EatIn',
  },
};
function reducer(state, action) {
  switch (action.type) {
    case CATEGORY_LIST_REQUEST:
      return {
        ...state,
        categoryList: { loading: true },
      };
    case CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        categoryList: { loading: false, categories: action.payload },
      };
    case CATEGORY_LIST_FAIL:
      return {
        ...state,
        categoryList: { loading: false, categories: action.payload },
      };
    case PRODUCTS_LIST_REQUEST:
      return {
        ...state,
        productsList: { loading: true },
      };
    case PRODUCTS_LIST_SUCCESS:
      return {
        ...state,
        productsList: { loading: false, products: action.payload },
      };
    case PRODUCTS_LIST_FAIL:
      return {
        ...state,
        productsList: { loading: false, products: action.payload },
      };
    case ORDER_SET_TYPE:
      return {
        ...state,
        order: { ...state.order, orderType: action.payload },
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}> {props.children}</Store.Provider>;
}