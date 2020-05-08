import React from "react";
import "./Menu.css";

const Menu = (props) => {
  const array = [
    { local: "Local News" },
    { entertainment: "Entertainment" },
    { technology: "Technology" },
    { science: "Science" },
    { health: "Health" },
  ];

  const menuItems = array.map((item) => (
    <li
      tabIndex="0"
      id={Object.keys(item).toString()}
      onClick={(event) => props.changeCategory(event)}
      text={Object.values(item).toString()}
    ></li>
  ));
  const allMenuItems = menuItems.map((item) => {
    if (props.currentCategory === item.props.id) {
      return (
        <li
          tabIndex="0"
          className="selected-category"
          id={item.props.id}
          key={item.props.id}
          onClick={item.props.onClick}
        >
          {item.props.text}
        </li>
      );
    } else {
      return (
        <li
          tabIndex="0"
          id={item.props.id}
          key={item.props.id}
          onClick={item.props.onClick}
        >
          {item.props.text}
        </li>
      );
    }
  });

  return (
    <aside>
      <ul className="menu-item">{allMenuItems}</ul>
    </aside>
  );
};

export default Menu;
