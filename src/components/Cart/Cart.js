import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
        
    }

    return (
        <div>
            <h1>Order Summary</h1>
            <h5>Added to cart:{cart.length} </h5>
            <p>Total cost: {total}</p>
        </div>
    );
};

export default Cart;