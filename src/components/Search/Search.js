import React from 'react';
import './Search.css';

class Search extends React.Component {

    state = {
        query: 'default-search',
        search: '',
    }

    searchFunction = () => {
        console.log('searched!');
        this.setState({
            search: this.state.query,
        })
    }

    updateQuery = (event) => {
        this.setState({
            query: event.target.value,
        })
    }

    render() {

        return <div>
            <form action="GET" onSubmit={this.searchFunction}>
                <input type="text" placeholder="search input" onInput={this.updateQuery}/><br/>
                <input type="submit" value="submit search"/>
            </form>
            <button onClick={this.searchFunction}>Search v2</button>
            <h4>Query: {this.state.query}</h4>
            <h4>Search: {this.state.search}</h4>

        </div>
    }
}

export default Search;
