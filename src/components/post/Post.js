import React, { useState } from 'react';
import "./post.scss"
import { Link } from "react-router-dom";
import { HiDotsHorizontal } from "react-icons/hi";
import { CiHeart } from "react-icons/ci";
import { FiHeart } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import { Comments } from '../comments/Comments';


export function Post({post}) {
    const [commentOpen, setCommentOpen] = useState(false);
    const liked = false;
    

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
            <div className='info'>
                <div className='item'>
                    {liked ? <FiHeart /> : <CiHeart/>}
                    12 likes
                </div>
                <div className='item' onClick={()=>setCommentOpen(!commentOpen)}>
                    <FaRegComment />
                    12 comments
                </div>
                <div className='item'>
                   <IoShareSocial />
                   Share
                </div>
            </div>
            { commentOpen && <Comments />}
            </div>
        </div>
    )
}
