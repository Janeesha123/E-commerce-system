import { combineReducers } from 'redux';
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_CART,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILURE,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  PLACE_ORDER_SUCCESS
} from './actions';

const initialProductState = {
  items: [],
  loading: false,
  error: null
};

const initialCartState = {
  items: [],
  order: null
};

const productsReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, loading: true, error: null };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, items: action.payload };
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case FETCH_CART:
      return { ...state, loading: true, error: null };
    case FETCH_CART_SUCCESS:
      return { ...state, loading: false, items: action.payload }; 
    case FETCH_CART_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ADD_TO_CART:
      return { ...state, items: [...state.items, action.payload] };
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        )
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    case PLACE_ORDER_SUCCESS:
      return { ...state, items: [], order: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  products: productsReducer,
  cart: cartReducer
});
