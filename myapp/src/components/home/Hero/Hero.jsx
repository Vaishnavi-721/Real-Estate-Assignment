import React from 'react'
import Search from '../../pages/Search'
import "./hero.css"
  
const Hero = () => {
  return (
  <>
     <section className='hero'>
        <div className="search">
        <h1>Search properties to rent</h1>
         <Search/>
        </div>
        <div className="containers">
            <form className='flex'/> 
            <div className="box">
                <span>Location</span><br/>
                <input type="text" placeholder='Location' />
            </div>
            <div className="box">
                <span>When</span> <br/>
                <input type="text" placeholder='Choose' />
            </div>
            <div className="box">
                <span>Price</span><br/>
                <input type="text" placeholder='Price ' />
            </div>
            <div className="box">
                <span>Property Type</span><br/>
                <input type="text" placeholder='Property Type ' />
            </div>
            <button className='btn4'>
                Search
            </button>
        </div></section>
  </>
  )
  
}

export default Hero