import React from 'react';

const Pricing = () => {
    return (
        <div>
            <div className='items-center grid  lg:w-5/6 mx-auto md:grid-cols-2 lg:grid-cols-4 gap-5 p-5'>
            <div className='flex-row items-center justify-center p-3 border-[2px] text-center'>
                <h1 className='text-2xl font-semibold '>BASIC PLAN</h1>
                <p className='text-2xl my-3 font-bold text-komla'> 2990 /-</p>
                <p className=' my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores fugiat ut facere iste reprehenderit quisquam harum, sunt unde quae ratione!</p>
                <div>
            <button className='orange-btn ml-2'>Get Started</button>
            </div>
            </div>
            <div className='flex-row items-center justify-center p-3 border-[2px] text-center'>
                <h1 className='text-2xl font-semibold '>BIGINNER PLAN</h1>
                <p className='text-2xl my-3 font-bold text-komla'> 2990 /-</p>
                <p className=' my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores fugiat ut facere iste reprehenderit quisquam harum, sunt unde quae ratione!</p>
                <div>
            <button className='orange-btn ml-2'>Get Started</button>
            </div>
            </div>
            <div className='flex-row items-center justify-center p-3 border-[2px] text-center'>
                <h1 className='text-2xl font-semibold '>PREMIUM PLAN</h1>
                <p className='text-2xl my-3 font-bold text-komla'> 2990 /-</p>
                <p className=' my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores fugiat ut facere iste reprehenderit quisquam harum, sunt unde quae ratione!</p>
                <div>
            <button className='orange-btn ml-2'>Get Started</button>
            </div>
            </div>
            <div className='flex-row items-center justify-center p-3 border-[2px] text-center'>
                <h1 className='text-2xl font-semibold '>ULTIMATE PLAN</h1>
                <p className='text-2xl my-3 font-bold text-komla'> 2990 /-</p>
                <p className=' my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores fugiat ut facere iste reprehenderit quisquam harum, sunt unde quae ratione!</p>
                <div>
            <button className='orange-btn ml-2'>Get Started</button>
            </div>
            </div>
                
            </div>
        </div>
    );
};

export default Pricing;