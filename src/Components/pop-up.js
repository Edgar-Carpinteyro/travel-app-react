import React from 'react';
import Login from './login';
// import ReplyButton from './reply-button';
// import LikeButton from './like-button';
// import Comment from './comment';

// let e = React.createElement;

export default class PopUp extends React.Component {
    render() {
        return (
            <div className='container card w-75'>
                <h1 className='card-body'>
                    Please Log In
                </h1>
                <div className='card-footer'>
                    <Login />
                </div>
            </div>
        )
    }
}