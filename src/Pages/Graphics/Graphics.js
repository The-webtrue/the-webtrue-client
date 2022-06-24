import React from 'react';
import Portfolio from '../../component/Service/Portfolio/Portfolio';
import Pricing from '../../component/Service/Pricing/Pricing';
import nobin from '../../assets/nobin.png';
const Graphics = () => {
    return (
        <div>
            <div className='text-center my-10'>
                <h1 className='lg:text-5xl text-4xl font-semibold'>Creative Design With the WebTrue</h1>
                <p className='text-xl my-3'>Best Graphic Design World</p>
                <p className='text-lg'>Designer <span className='text-komla'>KHAIRUL ISTIYAK</span></p>
                <p>www.khairulistiyak.com</p>
            </div>
            <div className='text-center'>
            <h1 className='lg:text-5xl text-4xl font-semibold text-komla'>Our Pricing</h1>
            <p className=' text-md  font-semibold py-3'>Pricing And Packages</p>
            </div>
        <Pricing/>
        <div >
            <h1 className='text-center lg:text-4xl text-4xl text-komla font-semibold mt-20'>About Designer</h1>
            <div className='md:flex sm:flex-row p-5 gap-5 lg:w-5/6 mx-auto'>
                <div>
                    <img src={nobin} alt="" />
                </div>
                <div className='flex-row justify-center items-center my-3'>
                    <h1 className='text-right  lg:text-4xl text-3xl font-semibold'>KHAIRUL ISTIYAK</h1>
                    <p className='text-komla text-md text-right '>DESIGNER ARTIST</p>
                    <p className='text-left my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eveniet mollitia expedita cumque iste eum id itaque facere. Qui ducimus iste, nam praesentium perspiciatis et voluptatem repudiandae suscipit perferendis aperiam.</p>
                </div>
            </div>
        </div>
        <Portfolio/>
        </div>
    );
};

export default Graphics;