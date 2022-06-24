import React from 'react';
import Advice from '../../component/Homepage/Advice/Advice';
import Header from '../../component/Homepage/Header/Header';
import Services from '../../component/Homepage/Services/Services';
import WorkDone from '../../component/Homepage/workDone/WorkDone';
import AboutUs from '../../component/Shared/AboutUs/AboutUs';

const Home = () => {
    return (
        <div >
            <Header/>
            <Advice/>
            <Services/>
            <WorkDone/>
            <AboutUs/>
        </div>
    );
};

export default Home;