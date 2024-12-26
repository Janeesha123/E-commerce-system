import React from 'react';
import { useSelector } from 'react-redux';

const OrderConfirmation = () => {
  const { order } = useSelector(state => state.cart);

  if (!order) return null;

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="card mt-4 shadow-lg rounded-lg">
        <div className="card-body text-center p-6">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Order Confirmed!</h2>
          <div className="alert alert-success bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
            Your order has been placed successfully!
          </div>
          <p className="text-lg mb-2">
            Order Number: <strong>{order.id}</strong>
          </p>
          <p className="text-gray-600 mb-4">
            Thank you for shopping with us!
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;