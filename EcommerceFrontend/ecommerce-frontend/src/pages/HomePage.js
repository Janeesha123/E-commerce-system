import React, { useEffect } from 'react';
import ProductList from '../components/ProductList';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="m-4">
      <div className="d-flex justify-content-between align-items-center">
      <h1 className="text-2xl font-bold">EcoCart</h1>
        <Link to="/cart" className="btn btn-secondary">View Cart</Link>
      </div>
      <ProductList />
    </div>
  );
};

export default HomePage;

