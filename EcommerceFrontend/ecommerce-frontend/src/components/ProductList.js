import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addToCart } from '../redux/actions';

const ProductList = () => {
    const dispatch = useDispatch();
    const { items: products, loading, error } = useSelector(state => state.products);
    const cartItems = useSelector(state => state.cart.items);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) return <div className="spinner-border" role="status"></div>;
    if (error) return <div className="alert alert-danger">{error}</div>;

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Our Products</h2>
            <div className="row">
                {products.map(product => {
                    const isInCart = cartItems.some(item => item.productId === product.id);

                    return (
                        <div key={product.id} className="col-12 mb-4">
                            <div className="card border shadow-sm hover:shadow-lg transition-shadow duration-300">
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title text-primary">{product.name}</h5>
                                    <p className="card-text text-success font-weight-bold">${product.price.toFixed(2)}</p>
                                    <p className="card-text text-muted">{product.description}</p>
                                    <p className="card-text text-warning">Stock: {product.quantityInStock}</p>
                                    <div className="mt-auto">
                                        <button
                                            className={`btn w-100 ${isInCart ? 'btn-secondary' : 'btn-primary'}`}
                                            onClick={() => {
                                                if (!isInCart) {
                                                    dispatch(addToCart({
                                                        productId: product.id,
                                                        productName: product.name,
                                                        price: product.price,
                                                        quantity: 1
                                                    }));
                                                }
                                            }}
                                            disabled={isInCart}
                                        >
                                            {isInCart ? 'In Cart' : 'Add to Cart'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductList;