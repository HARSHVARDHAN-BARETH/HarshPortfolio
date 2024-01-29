import React, { useState } from 'react'
import './header.css'
import logo from '../pic/logo.png'
function Header() {
    window.addEventListener("scroll", function(){
        //when scroll header at top position
        const header = document.querySelector(".header")
        header.classList.toggle("active", this.window.scrollY>100)
    })

    //toggle menu
    const [Mobile, SetMobile] = useState(false);
  return (
   <>
   <header className='header'>
           <div className="container d_flex">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="navlinks">
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={()=> SetMobile(false)}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#Features">Features</a></li>
                    <li><a href="#portfolio">portfolio</a></li>
                    <li><a href="#resume">resume</a></li>
                    <li><a href="#clients">clients</a></li>
                    <li><a href="#blogs">blogs</a></li>
                    <li><a href="#contact">contacat</a></li>
                    <li><button className='home-btn'>BUY NOW!</button></li>
                </ul>

                <button className='toggle' onClick={()=> SetMobile(!Mobile)}>
                    {Mobile ?  
                     <i className='fas fa-times home-btn close'></i> :           
                             <i className='fas fa-bars open'></i>
                         }
                  
                </button>
            </div>
           </div>
   </header>
   </>
  )
}

export default Header
