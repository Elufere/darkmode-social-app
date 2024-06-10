import React from 'react';
import "./home.scss";
import { Navbar } from '../../components/navbar/Navbar';
import { RightBar } from '../../components/rightBar/RightBar';
import { LeftBar } from '../../components/leftBar/LeftBar';
import { Feeds } from '../../components/feeds/Feeds';

export function Home() {
    

    return (
        <div className='home'>
            <Navbar />
            <div className='homeContainer'>
                <LeftBar />
                <Feeds />
                <RightBar />
            </div>
        </div>
    )
}
