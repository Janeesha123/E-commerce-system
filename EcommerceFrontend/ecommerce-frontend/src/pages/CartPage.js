import React, { useEffect } from 'react';
import Cart from '../components/Cart';
import { Link } from 'react-router-dom';
import OrderConfirmation from '../components/OrderConfirmation';

const CartPage = () => {
  return (
    <div className="m-4">
        <div className="d-flex justify-content-between align-items-center">
            <h1 className="text-2xl font-bold">E-commerce Cart</h1>
            <Link to="/" className="btn btn-secondary">Back to Store</Link>
        </div>
        <Cart />
        <OrderConfirmation />
    </div>
  );
};

export default CartPage;
