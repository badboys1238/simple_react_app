import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    const totalReducer = (previous, singer) => previous + singer.salary;
    const total = cart.reduce(totalReducer, 0);

    return (
        <div>
           <h3>Order Summary</h3>
           <h5>Singer Added: {props.cart.length}</h5>
           <p>Total Cost: {total}</p>
        </div>
    );
};

export default Cart;