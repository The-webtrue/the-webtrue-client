import React from 'react';
import software from '../../../assets/software.png';
import service from '../../../assets/service.png';
import portfolio from '../../../assets/portfolio.jpg';
import graphic from '../../../assets/logo.png';
const Services = () => {
    return (
        <div className="md:w-5/6 mx-auto">
            <div className="text-center">
                <h1 className="text-2xl text-komla">The WebTrue special services</h1>
                <h2 className="text-xl">The webTrue is always ready for any need of the company, anytime. 
                    So with good service and you get some bonus benefits, which only we give.
                    </h2>

                   <div>
                   <div className="my-5">
                        <h1 className="text-3xl ">WebTrue Digital Markiting Software purchase</h1>
                        <small className="text-komla">Use our software to take your business one step further</small>
                    </div>
                    <div className="items-center grid  md:grid-cols-2 lg:grid-cols-4">
                        <img src={software} alt="" />
                        <img src={software} alt="" />
                        <img src={software} alt="" />
                        <img src={software} alt="" />
                    </div>
                   </div>
                    

                    <div>
                        <div>
                        <h1 className="text-2xl py-5 text-komla">Services</h1>
                    </div>
                    <div className="items-center grid   md:grid-cols-3 gap-5 p-5">
                        <img className="img-fluid border-nil border-[3px]"  src={service} alt="" />
                        <img className="img-fluid border-nil border-[3px]"  src={service} alt="" />
                        <img className="img-fluid border-nil border-[3px]"  src={service} alt="" />
                           
                    </div>
                    </div>

                    <div>
                    <div>
                        <h1 className="text-2xl py-5 text-komla">Buy Your Personal Portfolio</h1>
                    </div>
                    <div className="items-center grid   md:grid-cols-3 gap-5 p-5">
                        <img className="img-fluid border-komla border-[3px]"  src={portfolio} alt="" />
                        <img className="img-fluid border-komla border-[3px]"  src={portfolio} alt="" />
                        <img className="img-fluid border-komla border-[3px]"  src={portfolio} alt="" />
                        
                           
                    </div>
                    </div>
                    

                    <div>
                    <div>
                        <h1 className="text-2xl py-5 ">Software</h1>
                        <small>We provide almost all IT related services. Contact us to get any service.</small>
                    </div>
                    <div className="items-center grid   md:grid-cols-3 gap-5 p-5">
                        <img className="img-fluid border-komla bg-komla border-[3px]"  src={software} alt="" />
                        <img className="img-fluid border-komla bg-komla border-[3px]"  src={software} alt="" />
                        <img className="img-fluid border-komla bg-komla border-[3px]"  src={software} alt="" />
                        <img className="img-fluid border-komla bg-komla border-[3px]"  src={software} alt="" />
                        <img className="img-fluid border-komla bg-komla border-[3px]"  src={software} alt="" />
                        <img className="img-fluid border-komla bg-komla border-[3px]"  src={software} alt="" />
                    </div>
                    </div>


                    <div>
                    <div>
                        <h1 className="text-2xl py-5 text-komla">Graphic Design Demo</h1>
                        <small>We provide almost all IT related services. Contact us to get any service.</small>
                    </div>
                    <div className="items-center grid   md:grid-cols-3 gap-5 p-5">
                        <img className="img-fluid border-komla border-[3px]"  src={graphic} alt="" />
                        <img className="img-fluid border-komla border-[3px]"  src={graphic} alt="" />
                        <img className="img-fluid border-komla border-[3px]"  src={graphic} alt="" />
                                         
                    </div>
                    </div>
                    

            </div>
        </div>
    );
};

export default Services;