import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    cart: [],
    products: [
        { name: 'Samsung Mobile', id: 1 },
        { name: 'Huawei Mobile', id: 2 },
        { name: 'Apple Mobile', id: 3 },
        { name: 'Vivo Mobile', id: 4 },
        { name: 'Sony Mobile', id: 5 },
        { name: 'OnePlus Mobile', id: 6 }
    ]
}

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newItem = { productId: action.id, name: action.name, cartId: state.cart.length + 1 }
            const cartItems = [...state.cart, newItem]
            return { ...state, cart: cartItems }

        case REMOVE_FROM_CART:
            const remainingCart = state.cart.filter(pd => pd.cartId !== action.cartId);
            return { ...state, cart: remainingCart }

        default:
            return state;
    }
}

export default cartReducers;