import {
  ORDER_SET_TYPE,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from './constants';
import axios from 'axios'

export const setOrderType = (dispatch, orderType) => {
    return dispatch({
        type: ORDER_SET_TYPE,
        payload: orderType
    })
}

export const listCategories = async (dispatch) => {
    dispatch({ type: CATEGORY_LIST_REQUEST })
    try {
        // bringing in the data from the categories data
        const { data } = await axios.get('/api/categories');
        return dispatch({
            type: CATEGORY_LIST_SUCCESS,
            // now we can use this data from the backend as the payload for SUCCESS
            payload: data,
        })

    } catch (error) {
        return dispatch({
            type: CATEGORY_LIST_FAIL,
            payload: error.message,
        })
    }
}

export const listProducts = async (dispatch, categoryName = '') => {
  dispatch({ type: PRODUCT_LIST_REQUEST });
  try {
    const { data } = await axios.get(`/api/products?category=${categoryName}`);
    return dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    return dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.message,
    });
  }
};
