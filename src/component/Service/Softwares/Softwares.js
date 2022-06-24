import React from 'react';
import software from '../../../assets/software.png';

const Softwares = () => {
    return (
        <div>
            <div className='text-center'>
            <h1 className='lg:text-5xl text-4xl font-semibold'>Software</h1>
                <p className='text-komla text-xl py-3'>We provide almost all IT related services.Contact us to get any service</p>
            </div>
            <div className='items-center grid  lg:w-3/4 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-5 p-5'>
                <div className='flex-row items-center justify-center p-3 border-[2px] text-center'>
                    <img src={software} alt="" />
                    <h1 className='text-lg'>Bulk SMS Software for LifeTime</h1>
                    <p className='text-md'> Only 2990 /-</p>
                    <div>
                <button  className='black-btn mr-2'>BUY</button>
                <button className='orange-btn ml-2'>DETAILS</button>
                </div>
                </div>
                <div className='flex-row items-center justify-center p-3 border-[2px] text-center'>
                    <img src={software} alt="" />
                    <h1 className='text-lg'>Bulk SMS Software for LifeTime</h1>
                    <p className='text-md'> Only 2990 /-</p>
                    <div>
                <button  className='black-btn mr-2'>BUY</button>
                <button className='orange-btn ml-2'>DETAILS</button>
                </div>
                </div>
                <div className='flex-row items-center justify-center p-3 border-[2px] text-center'>
                    <img src={software} alt="" />
                    <h1 className='text-lg'>Bulk SMS Software for LifeTime</h1>
                    <p className='text-md'> Only 2990 /-</p>
                    <div>
                <button  className='black-btn mr-2'>BUY</button>
                <button className='orange-btn ml-2'>DETAILS</button>
                </div>
                </div>
                <div className='flex-row items-center justify-center p-3 border-[2px] text-center'>
                    <img src={software} alt="" />
                    <h1 className='text-lg'>Bulk SMS Software for LifeTime</h1>
                    <p className='text-md'> Only 2990 /-</p>
                    <div>
                <button  className='black-btn mr-2'>BUY</button>
                <button className='orange-btn ml-2'>DETAILS</button>
                </div>
                </div>
                <div className='flex-row items-center justify-center p-3 border-[2px] text-center'>
                    <img src={software} alt="" />
                    <h1 className='text-lg'>Bulk SMS Software for LifeTime</h1>
                    <p className='text-md'> Only 2990 /-</p>
                    <div>
                <button  className='black-btn mr-2'>BUY</button>
                <button className='orange-btn ml-2'>DETAILS</button>
                </div>
                </div>
                <div className='flex-row items-center justify-center p-3 border-[2px] text-center'>
                    <img src={software} alt="" />
                    <h1 className='text-lg'>Bulk SMS Software for LifeTime</h1>
                    <p className='text-md'> Only 2990 /-</p>
                    <div>
                <button  className='black-btn mr-2'>BUY</button>
                <button className='orange-btn ml-2'>DETAILS</button>
                </div>
                </div>

            </div>
        </div>
    );
};

export default Softwares;