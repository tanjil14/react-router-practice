import React from "react";
import { Link, useHistory } from "react-router-dom";
const postStyle = {
  marginTop:"20px",
  border: "3px solid skyBlue",
  padding: "10px",
  borderRadius: "10px",
};

const Post = ({ post }) => {
  const { title, id } = post;
  const history = useHistory();
  const handleClick = () => {
    history.push(`/post/${id}`);
  };
  return (
    <div style={postStyle}>
      <h2>{title}</h2>
      <Link to={`/post/${id}`}>Post Detail</Link>
      <br />
      <button onClick={handleClick}>Click to see detail</button>
    </div>
  );
};

export default Post;
