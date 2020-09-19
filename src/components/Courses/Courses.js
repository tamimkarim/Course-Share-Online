import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import Product from '../Product/Product';
import './Courses.css';

const Courses = () => {
    const first18 = fakeData.slice(0,18);
    const[courses, setCourses] = useState(first18);

    //console.log(fakeData);  
    return (
        <div className="courses-container container-fluid" >
           {/* <h3>{courses.length}</h3> */}
           <div className="product-container  container-fluid">
           
            {
                courses.map(pd => <Product product={pd}></Product> )
            }
            
           </div>
           <div className="cart-container  ">
               <h3>This is Cart</h3>
           </div>
            



        </div>
    );
};

export default Courses;