import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

import './Courses.css';

const Courses = () => {
    const first20 = fakeData.slice(0, 20);
    const [courses, setCourses] = useState(first20);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        console.log('Product added', product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="courses-container container-fluid cart" >
            {/* <h3>{courses.length}</h3> */}
            <div className="product-container  container-fluid  col-md-8">

                {
                    courses.map(pd => <Product
                        handleAddProduct={handleAddProduct}
                        product={pd}
                    ></Product>)
                }

            </div>
            <div className="cart-container col-md-4  ">

               <Cart  cart ={cart}>

               </Cart>
                
            </div>
            
           






        </div>
    );
};

export default Courses;