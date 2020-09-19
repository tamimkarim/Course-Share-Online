import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import './Courses.css';

const Courses = () => {
    const first10 = fakeData.slice(0,10);
    const[courses, setCourses] = useState(first10);

    //console.log(fakeData);  
    return (
        <div className="courses-container container-fluid" >
           {/* <h3>{courses.length}</h3> */}
           <div className="product-container  container-fluid">
           <ul>
                {
                    courses.map(courses => <li>{courses.name}</li> )
                }
            </ul>
           </div>
           <div className="cart-container  ">
               <h3>This is Cart</h3>
           </div>
            



        </div>
    );
};

export default Courses;