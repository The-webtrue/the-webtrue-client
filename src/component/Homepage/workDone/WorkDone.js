import React from 'react';
import workDone from '../../../assets/workDone.jpg';

const WorkDone = () => {
    return (
        <div className="md:w-5/6 mx-auto ">
            <h1 className="text-3xl text-center mt-16 font-bold font-sans">WE GET THE WORK DONE ON TIME</h1>
            <div className="items-center grid   lg:grid-cols-2 gap-5 p-5">
            <div>
                <p className="text-3xl w-3/4">
                You will get 100 percent 
                matchwith our works. 
                Get IT related work done in a 
                timely manner at low cost. 
                Which is very necessary for 
                your business / organization.
                </p>
            </div>
            <div>
                <img src={workDone} alt="" />
            </div>
                                         
            </div>
        </div>
    );
};

export default WorkDone;