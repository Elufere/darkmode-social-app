import React from 'react';
import "./profile.scss";
import { Navbar } from "../../components/navbar/Navbar";
import { FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { CiLinkedin, CiMail } from "react-icons/ci";
import { MdPinDrop } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { LeftBar } from "../../components/leftBar/LeftBar";
import { RightBar } from "../../components/rightBar/RightBar";
import { Posts } from '../../components/posts/Posts';


export function Profile() {  
    return (
        <>
            <Navbar />
            <div className='profilePage'>
                <LeftBar />
                <div className='profile'>
                    <div className='images'>
                        <img
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMpSyYqKJ9Qhdg35Z1pAcM78gfW8mn8vsng&s' 
                            alt='' 
                            className='cover'
                        />
                        <img
                            src='https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600' 
                            alt='' 
                            className='profile'
                        />
                    </div>
                    <div className='profileContainer'>
                        <div className='userInfo'>
                            <div className='left'>
                                <a href='http://instagram.com'>
                                    <LuInstagram fontSize="large"/>
                                </a>
                                <a href='http://facebook.com'>
                                    <FaFacebook fontSize="large"/>
                                </a>
                                <a href='http://twitter.com'>
                                    <FaTwitter fontSize="large"/>
                                </a>
                                <a href='http://linkedin.com'>
                                    <CiLinkedin fontSize="large"/>
                                </a>
                                <a href='http://pininterest.com'>
                                    <FaPinterest fontSize="large"/>
                                </a>
                            </div>
                            <div className='center'>
                                <span>Jane Doe</span>
                                <div className='info'>
                                <div className='item'>
                                    <MdPinDrop />
                                    <span>USA</span>
                                </div>
                                <div className='item'>
                                    <TfiWorld />
                                    <span>Karo dev</span>
                                </div>
                                </div>
                                <button>follow</button>
                            </div>
                            <div className='right'>
                                <CiMail />
                                <HiOutlineDotsVertical />
                            </div>
                        </div>
                    </div>
                    <Posts />
                </div>
                <RightBar />
            </div>
        </>
    );
};
