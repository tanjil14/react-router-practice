import React from "react";
import { Link, useHistory } from "react-router-dom";

const Friend = ({ friend }) => {
  const { id, name, phone, website, address } = friend;
  const history = useHistory();
  const friendStyle = {
    border: "3px solid skyBlue",
    padding: "10px",
    borderRadius: "10px",
  };
  const url = `/friend/${id}`;
  const handleFriendClick = () => {
    history.push(`/friend/${id}`);
  };
  return (
    <div style={friendStyle}>
      <h2>I am: {name}</h2>
      <h5>Call me:{phone}</h5>
      <p>Visit me:{website}</p>
      <p>
        <small>I live in:{address.city}</small>
      </p>
      {/* way one  */}
      <Link to={url}> Visit Me </Link>
      <br />
      {/* 2nd way  */}
      <Link to={url}>
        <button type="button">Visit Me</button>
      </Link>
      <br />
      {/* 3rd way */}
      <button onClick={handleFriendClick} type="button">
        Visit me 2
      </button>
    </div>
  );
};

export default Friend;
