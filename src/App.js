import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';

function App() {
  return (
    <div >
     <Header></Header>
     <Courses></Courses>
     <footer className="center">
            <small>©course-share-online by Tamim Karim. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default App;
