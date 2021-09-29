import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "red",
  };

  return (
    <nav style={{ marginTop: "20px" }}>
      <NavLink exact activeStyle={activeStyle} to="/home">
        Home
      </NavLink>
      <NavLink exact activeStyle={activeStyle} to="/friends">
        friends
      </NavLink>
      <NavLink exact activeStyle={activeStyle} to="/about">
        about
      </NavLink>
      <NavLink  activeStyle={activeStyle} to="/about/culture">
        culture
      </NavLink>
    </nav>
  );
};

export default Header;
