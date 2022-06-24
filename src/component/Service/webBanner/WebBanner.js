import React from 'react';
import { NavLink } from "react-router-dom";
import Bg from "../../../assets/webBg.jpg";
import { Container } from 'react-bootstrap';
import './WebBanner.css';


const WebBanner = () => {
    return (
        <div className="headerWrapper">

        <div className="img-fluid"
                style={{
                background: `url(${Bg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                width: "100%",
                height :"100%"
                }}
            >
                <Container>
                <div className='my-auto text-center py-20 mx-auto lg:w-3/4'>
                    <h1 className='text-komla text-lg font-semibold'>WANT TO WORK WITH US</h1>
                    <h1 className='text-white text-4xl'>Digitally transform and grow your business!</h1>
                    <p className='text-md text-warning'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi velit recusandae deserunt sit sunt, facilis quia ipsam quod nisi reprehenderit delectus tempora eius ut. Quisquam laborum debitis dolorem et tempora quam perspiciatis culpa quos fugiat assumenda voluptates sed provident vero ipsam impedit autem ratione ea, ab porro tempore, vitae ipsa.</p>
                    <div>
                <button  className='black-btn mr-2 rounded'>Call Now</button>
                <button className='orange-btn ml-2 rounded'>Contact US</button>
                </div>
                </div>
                </Container>
            </div>
        </div>
    );
};

export default WebBanner;