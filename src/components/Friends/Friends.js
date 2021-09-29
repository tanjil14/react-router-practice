import { useEffect, useState } from "react";
import Friend from "../Friend/Friend";
import "./Friends.css";
const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div>
      {friends.length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        <h2>I have Friends: {friends.length}</h2>
      )}
      <div className="friend-container">
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default Friends;
