import React from 'react';
import advice from '../../../assets/advice.jpg';
import invest from  '../../../assets/Invest.jpg';
import safe from '../../../assets/safe.jpg';
const Advice = () => {
    return (
        <div>
            <h1 className="text-center text-2xl font-bold">Advice for your Company</h1>
            <div className="justify-between py-10 px-3 items-center grid  md:grid-cols-2 ">
                <div>
                    <img src={advice} alt="" />
                </div>
                <div className="p-2 justify-center items-center flex-row mx-auto lg:w-3/4 ">
                    <h1  className="text-2xl font-semibold text-komla my-3 ">Economic Carousel</h1>
                    
                    <p>We will always look at how
to promote your organization 
at a lower cost and provide
 financial advice as well.</p>
                </div>
            </div>
            <div className="justify-between py-10 px-3 items-center grid  md:grid-cols-2 gap-4 ">
                <div className="border-[3px] border-nil">
                    <img className="img-fluid" src={invest} alt="investment" />
                    <div className="p-5">
                    <h1 className="text-2xl">Investment purpose</h1>
                    <p className="text-xl text-komla">We will show you how to invest 
in any field to get more profit.</p>
                    </div>
                </div>
                <div className="border-[3px] border-nil">
                    <img className="img-fluid" src={safe} alt="safe and sequre" />
                    <div className="p-5">
                    <h1 className="text-2xl text-komla" >Safe and Secure</h1>
                    <p className="text-xl">The security of your information 
is very important to us. You will 
be 100% safe and secure with us.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advice;