import React from 'react';
import "./navbar.scss";
import { IoHomeOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { MdGridView } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { IoPersonOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";



export function Navbar() {
    

    return (
        <div className='navbar'>
            <div className='left'>
                <Link to="/" style={{textDecoration: "none"}}>
                     <span>Karosocial</span>
                </Link> 
                <IoHomeOutline />
                <IoMoonOutline />
                <MdGridView />
                <div className='search'>
                    <CiSearch />
                    <input placeholder='Search...'/>
                </div>
            </div>
            <div className='right'>
                <IoPersonOutline />
                <CiMail />
                <IoHomeOutline />
                <div className='user'>
                    <img src='https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600' alt=''/>
                    <span>John Doe</span>
                </div>
            </div>
        </div>
    )
}
