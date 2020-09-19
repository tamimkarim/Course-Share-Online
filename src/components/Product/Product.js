import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product);
    const {name} = (props.product);
    return (
        <div>
            {/* <h3>This is Product</h3> */}
            <h4 className="product-name container-fluid">{name}</h4>
        </div>
    );
};

export default Product;