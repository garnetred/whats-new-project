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

    render() {
        return (
            <form>
                <input type="text" name="search-form" value={this.state.query}/>
            </form>
        )
    }
}
export default SearchForm;