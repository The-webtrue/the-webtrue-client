import React from 'react';
import logo from '../../assets/logo.png';
import map from '../../assets/map.jpg'
import Form from '../../component/Contact/Form/Form';

const Contact = () => {
    return (
        <div>
            <h1 className='text-6xl text-komla p-5'>Contact</h1>
            <div className='sm:flex-row md:flex px-5 gap-5'>
                <div className='md:w-2/5 p-10'>
                    <img src={logo} alt="" />
                </div>
                <div className='md:3/5 m-auto'> 
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam nam error, repudiandae doloremque expedita iusto vero nihil nulla quam veritatis. </p>
                </div>
            </div>
            <div className='items-center grid   md:grid-cols-2 gap-5 p-10'>
                <div>
                    <img className="border-nil border-[2px] rounded-2xl" src={map} alt="" />
                </div>
                <div>
                    <div className='m-2'>
                        <h1 className='text-xl  text-komla'>Main Campus,Mymensingh</h1>
                         <p>WebTrue Tower</p>
                         <p>Opposite of Notun Bazar</p>
                         <p>House#7 ,Road#4, Mymensingh</p>
                         <p>Mymensingh 2200,Bangladesh</p>
                    </div>
                    <div className='flex m-2'>
                        <ul className='m-2'>
                            <li className='text-xl text-komla'>Phone Number</li>
                            <li>+880170000000</li>
                            <li>+880170000000</li>
                            <li>+880170000000</li>
                            
                        </ul>
                        <ul className='m-2'>
                            <li className='text-xl text-komla'>Office Visit Time</li>
                            <li>Saturday-Friday</li>
                            <li>9:00 AM to 5:00 AM</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Form/>
        </div>
    );
};

export default Contact;