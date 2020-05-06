import React from "react";
import "./Menu.css";

// MENU COMPONENT CODE GOES HERE
//should create some sort of onclick method that triggers a property (function) in the App.js file

const Menu = () => {
  return (
    <aside>
      <ul className="menu-item">
        <li>Local News</li>
        <li>Entertainment</li>
        <li>Technology</li>
        <li>Science</li>
        <li>Health</li>
      </ul>
    </aside>
  );
};

export default Menu;
