import { call, put, takeLatest } from 'redux-saga/effects';
import { api } from '../api';
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_CART,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILURE,
  PLACE_ORDER,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_FAILURE
} from './actions';

function* fetchProducts() {
  try {
    const products = yield call(api.getProducts);
    yield put({ type: FETCH_PRODUCTS_SUCCESS, payload: products });
  } catch (error) {
    yield put({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
  }
}
function* fetchCart() {
    try {
      const cart = yield call(api.getCart);
      yield put({ type: FETCH_CART_SUCCESS, payload: cart });
    } catch (error) {
      yield put({ type: FETCH_CART_FAILURE, payload: error.message });
    }
}

function* placeOrder(action) {
  try {
    const order = yield call(api.placeOrder, action.payload);
    yield put({ type: PLACE_ORDER_SUCCESS, payload: order });
  } catch (error) {
    yield put({ type: PLACE_ORDER_FAILURE, payload: error.message });
  }
}

function* addToCart(action) {
    try {
      const cartItem = yield call(api.addToCart, action.payload);
      yield put({ type: FETCH_CART }); 
    } catch (error) {
        console.error('Failed to add to cart:', error.message);
    }
}

function* handleUpdateCartQuantity(action) {
    try {
      const { id, quantity } = action.payload;
      const updatedCartItem = yield call(api.updateCartQuantity, id, quantity);
    //   yield put({ type: FETCH_CART }); 
    } catch (error) {
      console.error('Update Cart Quantity Failed:', error);
    }
}

function* removeFromCart(action) {
    try {
      yield call(api.removeFromCart, action.id);
      yield put({ type: FETCH_CART }); 
    } catch (error) {
      console.error('Remove From Cart Failed:', error);
    }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_PRODUCTS, fetchProducts);
  yield takeLatest(FETCH_CART, fetchCart);
  yield takeLatest(PLACE_ORDER, placeOrder);   
  yield takeLatest(ADD_TO_CART, addToCart);
  yield takeLatest(REMOVE_FROM_CART, removeFromCart);
  yield takeLatest(UPDATE_CART_QUANTITY, handleUpdateCartQuantity);
}