import React, { useContext } from 'react';
import "./stories.scss";
import {AuthContext} from "../../context/authContext";

export function Stories() {
    const { currentUser } = useContext(AuthContext);
    //TEMPORARY STORIES
    const stories = [
        {
          id: 1,
          name: "John Doe",
          img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
          id: 2,
          name: "John Koe",
          img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
          id: 3,
          name: "John Leo",
          img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
          id: 4,
          name: "John More",
          img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
      ];
    

    return (
        <div className='stories'>
            <div className='story'>
                    <img src={currentUser.profilePic} alt=''/>
                    <span>{currentUser.name}</span>
                    <button>+</button>
                </div>
            {stories.map((story)=>(
                <div className='story' key={stories.id}>
                    <img src={story.img} alt=''/>
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}
