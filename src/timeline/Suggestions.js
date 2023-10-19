import { Avatar } from '@mui/material';
import { Button } from '@mui/base';
import React from 'react';
import "./Suggestions.css";

function Suggestions({ user, relation }) {
    return (
        <div className='suggestions'>
            <div className='suggestion__usernames'>
                <div className='suggestion__username'>
                    <div className='suggestion__username_left'>
                        <span className='avatar'>
                            <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
                        </span>
                        <div className='suggestion__username_info'>
                            <span className='username'>{user}</span>
                            <span className='suggestion__relation'>{relation}</span>
                        </div>
                    </div>
                    <Button className='suggestion__followbutton'>Follow</Button>
                </div>
            </div>
        </div>
    );
}

export default Suggestions;
