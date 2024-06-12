import React, { useContext } from 'react'
import "./comment.scss";
import {AuthContext} from "../../context/authContext";

export function Comments() {
    const {currentUser} = useContext(AuthContext);

    const comments = [{
        id: 1,
        desc: "Lorem your look good",
        name: "Samuel Jackson",
        userId: 2,
        profilePic: "https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg"
    },
    {
        id: 2,
        desc: "Great people. Love to see you all again",
        name: "Rose Jackson",
        userId: 2,
        profilePic: "https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg"
    }
];

    return (
       <div className='comments'>
        <div className='write'>
            <img src={currentUser.profilePic} alt=''/>
            <input placeholder='write a comment'/>
            <button>send</button>
        </div>
            {comments.map((comment) => (
                <div className='comment'>
                    <img src={comment.profilePic} alt=''/>
                    <div className='info'>
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className='date'>1 hour ago</span>
                </div>
            ))}
       </div>
    );
};
