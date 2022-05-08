import React from 'react';
import './Cart.css'
const Cart = (props) => {
    // console.log(props.cart);
    const { cart } = props;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    let shiping = 12.99;
    if (total < 1) shiping = 0;
    else if (total > 100) {
        shiping = 2;
    } else if (total > 50) {
        shiping = 4.99;
    }
    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shiping + Number(tax)).toFixed(2);
    return (
        <div>
            <h3>oder sumary</h3>
            <h5>Items Odered : {props.cart.length}</h5>
            <p>Product Price {total}</p>
            <p>Shiping Cost : {shiping}</p>
            <p><small>Tax + VAT  : {tax} </small></p>
            <p>Total : {grandTotal} </p>


        </div>
    );
};

export default Cart;