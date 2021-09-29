import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

const PostDetail = () => {
  const { postId } = useParams();
  const history=useHistory()
  const [post, setPost] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);
  const btnClick=()=>{
     history.push('/posts')
  }
  return (
    <div>
      <h2>Post Detail: {postId}</h2>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <button onClick={btnClick} type="button">See all posts</button>
    </div>
  );
};

export default PostDetail;
