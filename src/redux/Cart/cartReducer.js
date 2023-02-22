import { ADD_TO_CART, CLEARCART, DECREMENT, INCREMENT, REMOVEFROMCART } from "./actionType";

const upDateLoalStorage = (cart)=>{
  localStorage.setItem("cart-shopping" , JSON.stringify(cart))
}

const initialState = {
  cart: localStorage.hasOwnProperty("cart-shopping") ? JSON.parse(localStorage.getItem("cart-shopping")) : []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:

      const hasProduct = state.cart.find(product=> product.id === action.payload.id) ? true : false;

      state.cart = hasProduct ? state.cart.map(product => product.id === action.payload.id ? {...action.payload , qty : product.qty + 1} : product) : [...state.cart, { ...action.payload, qty: 1 }]
      upDateLoalStorage(state.cart)

      return {
        ...state,
        cart: state.cart
      };

      case INCREMENT : 
      state.cart = state.cart.map(product => product.id === action.payload ? {...product, qty : product.qty + 1 } : product)
      upDateLoalStorage(state.cart)

      return{
        ...state , 
        cart : state.cart
      }

      case DECREMENT : 
      const removeProduct = state.cart.find(product => product.id === action.payload)
      if (removeProduct.qty > 1) {
        
       state.cart =  state.cart.map(product => product.id === action.payload ? {...product , qty : product.qty - 1 } : product) 
      }else{
        state.cart = state.cart.filter(product => product.id !== action.payload )
      } 

      upDateLoalStorage(state.cart)

      return{
        ...state , cart : state.cart
      }

      case REMOVEFROMCART : 
      state.cart =  state.cart.filter(product=>product.id !== action.payload)
       upDateLoalStorage(state.cart)
      return {...state , cart : state.cart}
      
      case CLEARCART : 
       upDateLoalStorage([])
      return {...state , cart : []}


    default:
      return state;
  }
};

export default cartReducer;
