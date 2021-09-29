import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
  gridGap: " 2rem",
};
const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div style={grid}>
      {posts.map((post) => (
        <Post post={post}></Post>
      ))}
    </div>
  );
};

export default Posts;
