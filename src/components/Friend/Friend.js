import React from 'react';

const Friend = ({friend}) => {
    const {id,name,phone,website,address}=friend;
    const friendStyle = {
        border: '3px solid skyBlue',
        padding: '10px',
        borderRadius: '10px'
    };
    return (
        <div style={friendStyle}>
            <h2>I am: {name}</h2>
            <h5>Call me:{phone}</h5>
            <p>Visit me:{website}</p>
            <p><small>I live in:{address.city}</small></p>
            <button type="button">Visit me 2</button>
        </div>
    );
};

export default Friend;