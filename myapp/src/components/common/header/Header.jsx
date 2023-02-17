import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'
import { nav } from '../../data/Data'

const Header = () => {
     
  return (
    <>
    <header>
        <div className='container flex'>
            <div className='logo'>
                <img src='./images/logo2.jpg' alt="nnn" />
            </div>
            <div className="nav">
                <ul className='flex'>
                    {nav.map((list,index)=>(
                      <li  key={index}>
                        <Link to={list.path}><span>{list.text}</span> </Link>
                      </li>

                   ))}
                </ul>
            </div>
            <div className="button flex">

                <button className='btn2'>
                     Login
                </button>
                 
                <button className='btn1'>
                     Sign Up
                </button>
            </div>

            <div className="toggle">
                <button>
                    <i className='fa fa-bars'></i>
                </button>
            </div>
        </div>
    </header>
    </>
  )
  
  
}

export default Header