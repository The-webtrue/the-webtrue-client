import React, { useState } from 'react';
import logo from "../../assets/logo.png";
import {NavLink, Link} from 'react-router-dom';

const Navbar = () => {
    const [changeHeader, setChangeHeader] = useState(false);
    //header change function 
    const onChangeHeader = () => {
        if (window.scrollY >= 50) {
            setChangeHeader(true)
        } else {
            setChangeHeader(false)
        }
    }
    //change header by scrolling
    window.addEventListener('scroll', onChangeHeader);
    return (
        <header>
           <nav className={changeHeader ?" navbar navbar-expand-lg navbar-dark bg-dark px-5 fixed w-full z-50 top-0 left-0 shadow-2xl shadow-kala  transition duration-500 ":"navbar navbar-expand-lg navbar-dark bg-kala px-5 fixed w-full z-50 top-0 left-0  "} >
	    <div class="container-fluid ">
		<Link to="/" className="navbar-brand text-gray-400" >
                    <img src={logo} alt="" width="30" height="24" className="mx-2 d-inline-block align-text-top "/>
                    The Web True</Link>
                    
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		  <span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse justify-content-end text-center text-md text-komla " id="navbarSupportedContent">
		  <ul class="navbar-nav ">
          <NavLink className="mx-10 my-2 Nav-item " to="/">Home</NavLink>			
          <NavLink className="mx-10 my-2 Nav-item " to="/">Service</NavLink>			
          <NavLink className="mx-10 my-2 Nav-item " to="/">About us</NavLink>			
          <NavLink className="mx-10 my-2 Nav-item " to="/">Contact us</NavLink>			
		  </ul>		  
		</div>
	  </div>
	</nav>
        </header>
    );
};

export default Navbar;