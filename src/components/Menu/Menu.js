import React from "react";
import "./Menu.css";

// MENU COMPONENT CODE GOES HERE
//should create some sort of onclick method that triggers a property (function) in the App.js file

const Menu = (props) => {
    console.log(props)
    //create a method that creates all of the li items via an array, maybe? 
    const array = [
      {local: 'Local News'},
      {entertainment: 'Entertainment'},
      {technology: 'Technology'},
      {science: 'Science'},
      {health: 'Health'},
    ]

    // const menuItems = array.map(item => <li tabIndex= 0 id="local" onClick={event => props.changeCategory(event)}>Local News</li>
    // })
    const menuItems = array.map(item => <li tabIndex="0" id={Object.keys(item).toString()} onClick={event => props.changeCategory(event)} text={Object.values(item).toString()}></li> )
    const allMenuItems = menuItems.map(item => {
      console.log(props.currentCategory, item.props.id)
      if (props.currentCategory === item.props.id) {
        return <li tabIndex="0" className="selected-category" id={item.props.id} onClick={item.props.onClick}>{item.props.text}</li>
      } else {
        return <li tabIndex="0" id={item.props.id} onClick={item.props.onClick}>{item.props.text}</li>
      }
    })

    console.log(allMenuItems)

    //first map should just generate the cards, second map will add the extra class? is this redundant? 
    //what other ways could I do this? I have to pass the current category and then just add a class
    //checking to see if id === props.currentCategory, if it does, want to add a className 'selected-category'
    
    //what am I mapping over though? I think I do need an array to create these ugh
  return (
    <aside>
      <ul className="menu-item">
        {/* <li tabIndex="3" id="local" onClick={event => props.changeCategory(event)}>Local News</li>
        <li tabIndex="4" id="entertainment" onClick={event => props.changeCategory(event)}>Entertainment</li>
        <li tabIndex="5" id="technology" onClick={event => props.changeCategory(event)}>Technology</li>
        <li tabIndex="6" id="science" onClick={event => props.changeCategory(event)}>Science</li>
        <li tabIndex="7" id="health" onClick={event => props.changeCategory(event)}>Health</li> */}

        {allMenuItems}
      </ul>
    </aside>
  );
};

export default Menu;
