import React from 'react';
import logo from '../../assets/logo.png';
import AboutService from '../../component/Service/AboutService/AboutService';

const Service = () => {
    return (
        <div>
            <div className='text-center p-20'>
            <h1 className='text-3xl font-bold'>How Can Web True Assist You</h1>
            <p className='text-lg text-komla font-bold'>Web True Provieded Servives </p>
            </div>
            <div className='items-center grid  md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 lg:px-20 mb-10'>
                <div className='text-center flex-row items-center justify-center m-auto p-3 border shadow-lg'>
                    <img className='w-20 mx-auto' src={logo} alt="logo" />
                    <h1 className='m-auto text-xl font-bold font-serif text-center my-3'>BRANDING DESIGN</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam repellat animi nobis laborum dolor quibusdam?</p>
                </div>
                <div className='text-center flex-row items-center justify-center m-auto p-3 border shadow-lg'>
                    <img className='w-20 mx-auto' src={logo} alt="logo" />
                    <h1 className='m-auto text-xl font-bold font-serif text-center my-3'>WEB DESIGN</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam repellat animi nobis laborum dolor quibusdam?</p>
                </div>
                <div className='text-center flex-row items-center justify-center m-auto p-3 border shadow-lg'>
                    <img className='w-20 mx-auto' src={logo} alt="logo" />
                    <h1 className='m-auto text-xl font-bold font-serif text-center my-3'>MARKETING</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam repellat animi nobis laborum dolor quibusdam?</p>
                </div>
                <div className='text-center flex-row items-center justify-center m-auto p-3 border shadow-lg'>
                    <img className='w-20 mx-auto' src={logo} alt="logo" />
                    <h1 className='m-auto text-xl font-bold font-serif text-center my-3'>GRAPHIC DESIGN</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam repellat animi nobis laborum dolor quibusdam?</p>
                </div>
                <div className='text-center flex-row items-center justify-center m-auto p-3 border shadow-lg'>
                    <img className='w-20 mx-auto' src={logo} alt="logo" />
                    <h1 className='m-auto text-xl font-bold font-serif text-center my-3'>SEO SERVICE</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam repellat animi nobis laborum dolor quibusdam?</p>
                </div>
                <div className='text-center flex-row items-center justify-center m-auto p-3 border shadow-lg'>
                    <img className='w-20 mx-auto' src={logo} alt="logo" />
                    <h1 className='m-auto text-xl font-bold font-serif text-center my-3'>APPS DEVELOPMENT</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam repellat animi nobis laborum dolor quibusdam?</p>
                </div>
                
            </div>
            <AboutService/>
        </div>
    );
};

export default Service;