import React from 'react';
import Advice from '../../component/Homepage/Advice/Advice';
import Body from '../../component/Homepage/Body/Body';
import Header from '../../component/Homepage/Header/Header';

const Home = () => {
    return (
        <div>
            <Header/>
            <Advice/>
            <Body>
            </Body>
            <Body/>
        </div>
    );
};

export default Home;