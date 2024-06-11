import React from 'react';
import "./feed.scss";
import { Stories } from '../stories/Stories';
import { Posts } from "../posts/Posts";

export function Feeds() {
    

    return (
        <div className='feed'>
            <Stories />
            <Posts />
        </div>
    )
}
