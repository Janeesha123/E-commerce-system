import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartQuantity, removeFromCart, placeOrder, fetchCart } from '../redux/actions';
import 'font-awesome/css/font-awesome.min.css';

const Cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.cart);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <div className="card shadow-lg">
        <div className="card-header bg-info text-white">
          <h5 className="card-title mb-0">Shopping Cart</h5>
        </div>
        <div className="card-body">
          {items.length === 0 ? (
            <div className="text-center">
              <h6>Your cart is empty</h6>
              <p className="text-muted">Add some items to get started!</p>
            </div>
          ) : (
            <>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Item Price</th>
                    <th scope="col">Price</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map(item => (
                    <tr key={item.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          {item.image && <img src={item.image} alt={item.productName} width="50" height="50" className="me-2" />}
                          <span>{item.productName}</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <button 
                            className="btn btn-sm me-2 font-bold"
                            onClick={() => {
                              if (item.quantity > 1) {
                                dispatch(updateCartQuantity(item. id, item.quantity - 1));
                              }
                            }}
                          >
                            -
                          </button>
                          <div 
                            className="border border-gray-300 rounded px-3 py-1 min-w-[40px] text-center bg-gray-100"
                          >
                            {item.quantity}
                          </div>
                          <button 
                            className="btn btn-sm ms-2"
                            onClick={() => dispatch(updateCartQuantity(item.id, item.quantity + 1))}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>${item.price.toFixed(2)}</td>
                      <td>${(item.price * item.quantity).toFixed(2)}</td>
                      <td>
                        <button 
                          className="btn btn-danger"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          <i className="fas fa-trash-alt"></i> {/* Trash icon */}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4">
              <p className="h4 mb-0 text-center">Total: <span className="text-blue-800">${total.toFixed(2)}</span></p>
              <div className="d-flex justify-content-center">
                <button
                  className="btn-blue w-40 mt-2 bg-info text-white font-bold border-null"
                  onClick={() => dispatch(placeOrder(items))}
                >
                  Place Order
                </button>
              </div>
            </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;