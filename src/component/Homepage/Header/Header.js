import React from 'react';
import banner from '../../../assets/banner.jpg';


const Header = () => {
    return (
        <div className="justify-between py-10 px-3 items-center grid  md:grid-cols-2 ">
            <div className=" justify-center items-center flex-row md:p-20 p-5">
                <h1 className="text-2xl">Making It Expert</h1>
                <h2 className="text-komla text-xl">Trusted organization in the world</h2>
                <p className="text-md"> 
                    Webtrue is by your side to keep yourself 
                    updated with the latest technology.
                    IT sector or non-IT sector, 
                    there is a good demand for
                    IT experts everywhere now. 
                    That's why updated curriculum, 
                    experienced mentor. 
                    We believe that every human 
                    being is talented, and we have a 
                    responsibility to develop your talents. 
                    All you need is your interest and regular practice.
                </p>
                <div>
                <button  className='black-btn mr-2'>ABOUT US</button>
                <button className='orange-btn ml-2'>ABOUT US</button>
                </div>
            </div>
            
            <div className="">
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Header;