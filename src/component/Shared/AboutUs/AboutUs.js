import React from 'react';
import logo from "../../../assets/logo.png";

const AboutUs = () => {
    return (
        <div className="flex md:grid-cols-2 gap-5 p-5 border-y-[5px] mb-5">
            <div className="hidden sm:block w-2/5 items-center justify-center m-auto">
                <img className="w-3/4 md:p-5" src={logo} alt="" />
            </div>
            <div className=" sm:w-3/5">
                <p className="text-4xl text-start">
                    About Us
                </p>
                <h1 className="text-6xl my-2 text-komla text-end ">The WebTrue</h1>
                <p className="text-xl my-2">
                
A trusted organization founded with the goal 
of creating success in IT. Since its inception, 
The webtrue has achieved multifaceted success. 
Contributing to building a digital Bangladesh. 
One of the leading IT companies in Bangladesh 
has been playing an important role in eliminating
the problem of unemployment since 2022.


                </p>
            </div>
        </div>
    );
};

export default AboutUs;