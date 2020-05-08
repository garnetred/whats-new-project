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

class App extends Component {
  constructor() {
    super();
    this.state = {
      local,
      technology,
      entertainment,
      science,
      health,
      currentSection: "local",
      searchTerm: "",
    };
  }

  changeCategory = (event) => {
    this.setState({ currentSection: event.target.id });
    this.clearSearchTerm();
  };

  addSearchTerm = (term, event) => {
    event.preventDefault();
    this.setState({ searchTerm: term });
  };

  clearSearchTerm = () => {
    this.setState({ searchTerm: "" });
  };

  render() {
    let section = this.state.currentSection;
    let currentSection = this.state[section];
    return (
      <section className="app">
        <nav>
          <img
            src="Vector.png"
            className="horizontal-bars"
            alt="three horizontal bars used to open and close the menu"
          ></img>
          <h1 className="logo">That's News!</h1>
          <SearchForm addSearchTerm={this.addSearchTerm} />
        </nav>
        <section className="main-page">
          <Menu
            currentCategory={this.state.currentSection}
            changeCategory={this.changeCategory}
          />
          <NewsContainer
            category={currentSection}
            searchTerm={this.state.searchTerm}
          />
        </section>
      </section>
    );
  }
}

export default App;
