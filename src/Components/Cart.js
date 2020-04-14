import React from 'react';
import { removeFromCart } from '../redux/actions/cartActions';
import { connect } from 'react-redux';

const Cart = props => {
    const { cart, removeFromCart } = props;

    return (
        <div>
            <h3>Your Cart</h3>
            {
                cart.map(pd => <p key={pd.cartId}>{pd.name} <button onClick={() => removeFromCart(pd.cartId)}>X</button></p>)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = {
    removeFromCart: removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);