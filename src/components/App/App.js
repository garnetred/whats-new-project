import React, { Component } from "react";
import local from "../../data/local";
import entertainment from "../../data/entertainment";
import health from "../../data/health";
import science from "../../data/science";
import technology from "../../data/technology";

import "./App.css";
import SearchForm from "../SearchForm/SearchForm";
import Menu from "../Menu/Menu";
import NewsContainer from "../NewsContainer/NewsContainer";

//likely need to create a function that changes the category depending on what was clicked
//so we would click on something, its class (which should match the state keys, would be passed to the function)
//function would be invoked and then would somehow tell the newscontainer which articles to display, maybe this.state.some variable? 
class App extends Component {
  constructor() {
    super();
    this.state = {
      local,
      technology,
      entertainment,
      science,
      health,
      currentSection: 'local', 
      searchTerm: ''
    };
    //local is an array with objects and key value pairs
    console.log(this.state)
  }

  changeCategory = (event) => {
    this.setState({currentSection: event.target.id})
    this.clearSearchTerm();
  }

  addSearchTerm = (term, event) => {
    event.preventDefault();
    this.setState({searchTerm: term})
  }

  clearSearchTerm = () => {
    this.setState({searchTerm: ''});
  }

  render() {
    console.log(this.state.local)
    console.log(this.state.currentSection)
    let section = this.state.currentSection
    let currentSection = this.state[section]
    return (
      <section className="app">
        <nav>
          <img
            src="Vector.png"
            className="horizontal-bars"
            alt="three horizontal bars used to open and close the menu"
          ></img>
          <h1 className="logo">That's News!</h1>
          <SearchForm addSearchTerm={this.addSearchTerm} clearSearchTerm={this.clearSearchTerm}/>
        </nav>
        <section className="main-page">
          <Menu currentCategory={this.state.currentSection} changeCategory={this.changeCategory} clearSearchTerm={this.clearSearchTerm}/>
          <NewsContainer category={currentSection} searchTerm={this.state.searchTerm} clearSearchTerm={this.clearSearchTerm}/>
        </section>
      </section>
          );
  }
}

//do I need a currentSection? Maybe I just need to pass in classname instead
//variable names don't have to be strings. can I use that? 
//you can't interpolate variable names, though, ugh

//need to pass down method to change method, not props themselves into menu
//it's what i was thinking before, referencing the key inside of this.state

export default App;
