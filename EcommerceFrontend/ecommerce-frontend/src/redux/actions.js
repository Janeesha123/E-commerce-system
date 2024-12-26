export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const FETCH_CART = 'FETCH_CART';
export const FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS';
export const FETCH_CART_FAILURE = 'FETCH_CART_FAILURE';
export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const PLACE_ORDER = 'PLACE_ORDER';
export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS';
export const PLACE_ORDER_FAILURE = 'PLACE_ORDER_FAILURE';

export const fetchProducts = () => ({ type: FETCH_PRODUCTS });
export const fetchCart = () => ({ type: FETCH_CART });
export const addToCart = (product) => ({ type: ADD_TO_CART, payload: product });
export const updateCartQuantity = (id, quantity) => ({ type: UPDATE_CART_QUANTITY, payload: { id, quantity } });

export const removeFromCart = (id) => ({ type: REMOVE_FROM_CART, id });
export const placeOrder = (items) => ({ type: PLACE_ORDER, payload: items });