import React, { useState } from 'react';
import logo from "../../../assets/logo.png";
import {NavLink, Link} from 'react-router-dom';
import './Navbar.css' ;
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigationbar = () => {
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
           {/* <nav className={changeHeader ?"navbar navbar-expand-lg navbar-dark bg-dark sm:px-5 fixed w-full  top-0 left-0 shadow-2xl shadow-kala  transition duration-500 ":"navbar navbar-expand-lg navbar-dark bg-kala sm:px-5 w-full top-0 left-0  "} >
	    <div className="container-fluid ">
		<Link to="/" className="navbar-brand text-gray-400 flex" >
                    <img src={logo} alt="" width="30" height="24" className="mx-2 d-inline-block align-text-top "/>
                    <h1 className='hidden md:block'>The Web True</h1></Link>
                    
		<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		  <span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse justify-content-end text-center text-md text-komla " id="navbarSupportedContent">
		  <ul className="navbar-nav ">
          <NavLink className="mx-10 my-2 Nav-item li" to="/">HOME</NavLink>			
          <NavLink className="mx-10 my-2 Nav-item li" to="/service">SERVICE</NavLink>			
          <NavLink className="mx-10 my-2 Nav-item li" to="/about">ABOUT US</NavLink>			
          <NavLink className="mx-10 my-2 Nav-item li" to="/contact">CONTACT US</NavLink>			
		  </ul>		  
		</div>
	  </div>
	</nav> */}
              <Navbar collapseOnSelect expand="lg"  className={changeHeader ?"navbar navbar-expand-lg navbar-dark bg-dark sm:px-5 fixed w-full  top-0 left-0 shadow-2xl shadow-kala  transition duration-500 ":"navbar navbar-expand-lg navbar-dark bg-kala sm:px-5 w-full top-0 left-0  "} >
              <Container>
              <Navbar.Brand className= "flex" as={Link} to="/"><img src={logo} alt="" width="30" height="24" className="mx-2 d-inline-block align-text-top "/>
                    <h1 className='hidden md:block'>The Web True</h1></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav className='text-center' >
                  <Nav.Link style={{color:'#EE5A27'}} className="mx-5  Nav-item li " href="#" as={NavLink} to="/">HOME</Nav.Link>
                  <Nav.Link style={{color:'#EE5A27'}} className="mx-5  Nav-item li" href="#" as={NavLink} to="/service">SERVICE</Nav.Link>
                  <Nav.Link style={{color:'#EE5A27'}} className="mx-5  Nav-item li" href="#" as={NavLink} to="/about">ABOUT US</Nav.Link>
                  <Nav.Link style={{color:'#EE5A27'}} className="mx-5  Nav-item li" href="#" as={NavLink} to="/contact">CONTACT US</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              </Container>
            </Navbar>
        </header>
    );
};

export default Navigationbar;