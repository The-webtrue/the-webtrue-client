import React from 'react';
import portfolio from '../../../assets/logo.png';

const Portfolio = () => {
    return (
            <div>
                <h1 className='text-6xl text-center p-5 font-bold'>Our Portfolio</h1>
                <div className="items-center grid  lg:w-3/4 mx-auto md:grid-cols-3 gap-5 p-5">
                        <img className="img-fluid border-komla border-[3px]"  src={portfolio} alt="" />
                        <img className="img-fluid border-komla border-[3px]"  src={portfolio} alt="" />
                        <img className="img-fluid border-komla border-[3px]"  src={portfolio} alt="" />
                        <img className="img-fluid border-komla border-[3px]"  src={portfolio} alt="" />
                        <img className="img-fluid border-komla border-[3px]"  src={portfolio} alt="" />
                        <img className="img-fluid border-komla border-[3px]"  src={portfolio} alt="" />
                        
                                         
                    </div>
            </div>
    );
};

export default Portfolio;