import React from 'react';

const Product = props => {
    const { product, addToCart } = props;

    return (
        <div className="product">
            <h4>{product.name}</h4>
            <button onClick={() => addToCart(product.id, product.name)}>Add to cart</button>
        </div>
    );
};

export default Product;