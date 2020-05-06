import React, { Component } from "react";
import local from "../../data/local";
import "./App.css";
import SearchForm from "../SearchForm/SearchForm";
import Menu from "../Menu/Menu";
import NewsContainer from "../NewsContainer/NewsContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      category: "",
      //this state should maybe indicate the category of story that we're in?
    };
  }

  render() {
    return (
      <section className="app">
        <nav>
          <img
            src="Vector.png"
            className="horizontal-bars"
            alt="three horizontal bars used to open and close the menu"
          ></img>
          <h1 class="logo">That's News!</h1>
          <SearchForm />
        </nav>
        <section className="main-page">
          <Menu />
          <NewsContainer />
        </section>
      </section>
    );
  }
}

export default App;
