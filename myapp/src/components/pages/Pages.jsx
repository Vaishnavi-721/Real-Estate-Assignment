import React from 'react'
import Header from '../common/header/Header'

import {
    BrowserRouter as Router,
    Routes,
    Route
     
  } from "react-router-dom";
import Home from '../home/Home';

const Pages = () => {
  return <>
   
  <Router>
      <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          {/* <Route path="/about">
            <About />
          </Route> */}
           
        </Routes>
      
    </Router>
  
  </>
     
  
}

export default Pages