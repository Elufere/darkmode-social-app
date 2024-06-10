import React from 'react';
import "./profile.scss";
import { Navbar } from '../../components/navbar/Navbar';
import { LeftBar } from '../../components/leftBar/LeftBar';
import { RightBar } from '../../components/rightBar/RightBar';

export function Profile() {
    

    return (
        <div className='profile'>
            <Navbar />
            <LeftBar />
            <RightBar />
        </div>
    )
}
