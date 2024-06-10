import React from 'react';
import "./home.scss";
import { Navbar } from '../../components/navbar/Navbar';
import { RightBar } from '../../components/rightBar/RightBar';
import { LeftBar } from '../../components/leftBar/LeftBar';

export function Home() {
    

    return (
        <div className='home'>
            <Navbar />
            <LeftBar />
            <RightBar />
        </div>
    )
}
