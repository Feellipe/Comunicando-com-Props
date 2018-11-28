import React from 'react';
import faker from 'faker';

const Comments = ({author, time, post}) => {
    return(
         
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={faker.image.avatar()} alt="avatar"/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                      {author}  
                    </a>
                    <div className="metadata">
                        <span className="date">{time}</span>

                    </div>
                    <div className="text"> 
                        {post}
                    </div>
                </div>

            </div>
    )
}

export default Comments;