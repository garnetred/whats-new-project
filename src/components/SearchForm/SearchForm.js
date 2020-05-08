import React from "react";
import "./SearchForm.css";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }

  createNewSearch = (event) => {
    event.preventDefault();
    this.props.addSearchTerm(this.state.searchTerm, event);
    this.clearInput();
  };

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  clearInput = () => {
    this.setState({ searchTerm: "" });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="search-form"
          value={this.state.searchTerm}
          onChange={this.handleChange}
          tabIndex="0"
          aria-label="search-form"
          placeholder="search"
        />
        <button
          className="search-form-button"
          type="submit"
          tabIndex="0"
          onClick={(event) => this.createNewSearch(event)}
        >
          Search
        </button>
      </form>
    );
  }
}
export default SearchForm;
