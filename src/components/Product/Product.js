import React from 'react';
import './Product.css';
const Product = (props) => {
    // console.log(props);
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <p><small>by : {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>only {stock} left in stock - oder soon</small></p>
                <button onClick={() => props.handleAddToCart(props.product)}
                    className='bnt-regular'>add to card</button>
            </div>

        </div>
    );
};

export default Product;