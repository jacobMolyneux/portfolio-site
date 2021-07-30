import React from "react";
import "./stylesheets/navbar.css";
const Navbar = () => {
  return (
    <div id="Container">
      <ul id="navbarlist">
        <li id="navItem">Home</li>
        <li id="navItem">Resume</li>
        <li id="navItem">Projects</li>
      </ul>
    </div>
  );
};
export { Navbar };
