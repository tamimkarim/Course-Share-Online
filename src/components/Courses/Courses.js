import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import Product from '../Product/Product';
import './Courses.css';

const Courses = () => {
    const first20 = fakeData.slice(0,20);
    const[courses, setCourses] = useState(first20);
    const [cart, setCart] =useState([]);

    const handleAddProduct = (product) => {
        console.log('Product added', product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="courses-container container-fluid" >
           {/* <h3>{courses.length}</h3> */}
           <div className="product-container  container-fluid">
           
            {
                courses.map(pd => <Product
                    handleAddProduct ={handleAddProduct}
                    product={pd}
                    ></Product> )
            }
            
           </div>
           <div className="cart-container  ">
               
               <h5>Added to cart:{cart.length} </h5>
           </div>
            



        </div>
    );
};

export default Courses;