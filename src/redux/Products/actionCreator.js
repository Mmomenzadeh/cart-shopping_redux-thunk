import { SET_ERROR, SET_LOADING, SET_PRODUCTS } from "./actionType";

const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

const setLoading = (status) => {
  return {
    type: SET_LOADING,
    payload: status,
  };
};

const setError = (error) => {
  return {
    type: SET_ERROR,
    payload: error,
  };
};

 export const fetchPost = () => {
  return function (dispatch) {
    dispatch(setLoading(true));
    fetch("http://localhost:3000/Products")
      .then((res) => res.json())
      .then((response) => {
        dispatch(setProducts(response));
        dispatch(setLoading(false));
        dispatch(setError(null));
      })
      .catch((err) => dispatch(setError(err.message)));
  };
};
