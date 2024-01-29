import React from 'react'
import './header.css'
import logo from '../pic/logo.png'
function Header() {
  return (
   <>
   <header className='header'>
           <div className="container d_flex">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="navlinks">
                <ul className="link f_flex uppercase">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#Features">Features</a></li>
                    <li><a href="#portfolio">portfolio</a></li>
                    <li><a href="#resume">resume</a></li>
                    <li><a href="#clients">clients</a></li>
                    <li><a href="#blogs">blogs</a></li>
                    <li><a href="#contact">contacat</a></li>
                    <li><button className='home-btn'>BUY NOW!</button></li>
                </ul>

                <button className='toggle'>
                    <i className='fas fa-times home-btn close'></i>
                    <i className='fas fa-bars open'></i>
                </button>
            </div>
           </div>
   </header>
   </>
  )
}

export default Header
