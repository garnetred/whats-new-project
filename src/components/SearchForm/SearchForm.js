import React from 'react';
import './SearchForm.css';

// SEARCHFORM COMPONENT CODE GOES HERE

//should take in props from main parent component that will allow it to invoke the appropriate function
class SearchForm extends React.Component {
    constructor() {
        super();
        this.state = {
            query: ''
        };
    }

    handleChange = (event) => {
        this.setState({query: event.target.value})
    }

    render() {
        return (
            <form>
                <input type="text" name="search-form" value={this.state.query} onChange={this.handleChange} tabIndex="1"/>
            </form>
        )
    }
}
export default SearchForm;