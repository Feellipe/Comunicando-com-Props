import React from 'react';
import Button from './Button';
import Comments from '../Comment';


const ApprovalCard = ({author, time, post}) => (
    <div className="ui cards" >
        <div className="content">
            <Comments
                author={author}
                time={time}
                post={post}
            />
        </div>
  
        <div className="extra content">
            <div className="ui two buttons">
                <Button></Button>     
            </div>
        </div>
    </div>
);


export default ApprovalCard;