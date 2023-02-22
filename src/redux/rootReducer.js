import { combineReducers } from "redux";
import cartReducer from "./Cart/cartReducer";
import ProductReducer from "./Products/ProductsReducer";

const rootReducer = combineReducers({
  products: ProductReducer,
  cartShopping : cartReducer
});

export default rootReducer;
