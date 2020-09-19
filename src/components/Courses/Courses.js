import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData';

const Courses = () => {
    const first10 = fakeData.slice(0,10);
    const[courses, setCourses] = useState(first10);

    //console.log(fakeData);  
    return (
        <div>
           <h3>{courses.length}</h3>
        </div>
    );
};

export default Courses;