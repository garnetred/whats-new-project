import React from "react";
import "./Menu.css";

// MENU COMPONENT CODE GOES HERE
//should create some sort of onclick method that triggers a property (function) in the App.js file

const Menu = (props) => {
    console.log(props)
  return (
    <aside>
      <ul className="menu-item">
        <li tabIndex="2" id="local" onClick={event => props.changeCategory(event)}>Local News</li>
        <li tabIndex="3" id="entertainment" onClick={event => props.changeCategory(event)}>Entertainment</li>
        <li tabIndex="4" id="technology" onClick={event => props.changeCategory(event)}>Technology</li>
        <li tabIndex="5" id="science" onClick={event => props.changeCategory(event)}>Science</li>
        <li tabIndex="6" id="health" onClick={event => props.changeCategory(event)}>Health</li>
      </ul>
    </aside>
  );
};

export default Menu;
