import React from 'react';
import software from '../../assets/software.png';
import Softwares from '../../component/Service/Softwares/Softwares';

const Software = () => {
    return (
        <div>
            <div className='my-20 text-center'>
                <h1 className='lg:text-5xl text-4xl font-semibold'>WebTrue Digital Marketing Software Purchase</h1>
                <p className='text-komla text-xl py-3'>Use our software to take your business one step further</p>
                <div className="items-center grid  md:grid-cols-2 lg:grid-cols-4 py-20">
                        <img src={software} alt="" />
                        <img src={software} alt="" />
                        <img src={software} alt="" />
                        <img src={software} alt="" />
                    </div>
            </div>
            <Softwares/>
        </div>
    );
};

export default Software;