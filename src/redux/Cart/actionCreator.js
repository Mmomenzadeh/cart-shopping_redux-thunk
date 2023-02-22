import { type } from "@testing-library/user-event/dist/type";
import {
  ADD_TO_CART,
  CLEARCART,
  DECREMENT,
  INCREMENT,
  REMOVEFROMCART,
} from "./actionType";

export const addToCart = (productOrder) => {
  return {
    type: ADD_TO_CART,
    payload: productOrder,
  };
};

export const increment = (productId) => {
  return {
    type: INCREMENT,
    payload: productId,
  };
};

export const decrement = (productId) => {
  return {
    type: DECREMENT,
    payload: productId,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVEFROMCART,
    payload: productId,
  };
};

export const clearCart = () => {
  return {
    type: CLEARCART,
  };
};
