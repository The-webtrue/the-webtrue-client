import React from 'react';
import aboutService from '../../../assets/aboutService.png';

const AboutService = () => {
    return (
        <div className='grid  md:grid-cols-2  gap-5 p-5 lg:w-3/4 mx-auto items-center justify-center'>
            <div className='p-5'>
                <img  src={aboutService} alt="about service" />
            </div>
            <div>
                <p className='text-komla text-md'>ABOUT OUR SERVICE</p>
                <h1 className='text-2xl my-2 '>What We Offer Is Not Just Service</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus voluptas similique esse quia aperiam placeat doloremque nostrum eligendi omnis dolorem. Quas perferendis cum doloremque itaque ut, quae velit nisi.
                </p>
            </div>
        </div>
    );
};

export default AboutService;