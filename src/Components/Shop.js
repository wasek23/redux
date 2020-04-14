import React from 'react';
import Product from './Product';
import { addToCart } from '../redux/actions/cartActions';
import { connect } from 'react-redux';

const Shop = props => {
    const { products, addToCart } = props;

    return (
        <div>
            <h2>Shop From Here</h2>
            <div className="products">
                {
                    products.map(pd => <Product product={pd} addToCart={addToCart} key={pd.id}></Product>)
                }
            </div>

        </div>
    );
};

const mapStateToProps = state => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = {
    addToCart: addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);