import React from 'react';
import './SearchForm.css';

// SEARCHFORM COMPONENT CODE GOES HERE

//should take in props from main parent component that will allow it to invoke the appropriate function
class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        };
        console.log(props)
    }

    createNewSearch = (event) => {
        event.preventDefault();
        this.props.addSearchTerm(this.state.searchTerm, event)
        this.clearInput();
    }

    handleChange = (event) => {
        this.setState({searchTerm: event.target.value})
    }

    clearInput = () => {
        this.setState({searchTerm: ''});
        // this.props.clearSearchTerm();

    }

    render() {
        return (
            <form>
                <input type="text" name="search-form" value={this.state.searchTerm} onChange={this.handleChange} 
                tabIndex="1"  />
                <button className="search-form-button" type="submit" tabIndex= "2" onClick={(event) => this.createNewSearch(event)}>Search</button>
            </form>
        )
    }
    //want to create a method in App.js that takes in the state of searchform and then re-renders newscounter, with the search term
    //passed in as a prop

}
export default SearchForm;