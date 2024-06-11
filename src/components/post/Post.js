import React from 'react';
import "./post.scss"
import { Link } from "react-router-dom";
import { HiDotsHorizontal } from "react-icons/hi";


export function Post({post}) {
    

    return (
        <div className='post'>
            <div className='container'>
            <div className='user'>
                <div className='userInfo'>
                    <img src={post.profilePic} alt=''/>
                        <div className='details'>
                        <Link
                        to={`/profile/${post.userId}`} 
                        style={{textDecoration:"none", color:"inherit"}}
                        >
                            <span className='name'>{post.name}</span>
                        </Link>
                   <span className='date'>1 min ago</span>
                   </div>
                </div>
                <div className='userIcon'>
                    <HiDotsHorizontal />
                </div>
            </div>
            <div className='content'>
                <p>{post.desc}</p>
                <img src={post.img}/>
            </div>
            <div className='icon'></div>
            </div>
        </div>
    )
}
