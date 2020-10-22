import React from 'react';
import './Search.css';
import Form from '../Form/Form.js';
import Results from '../Results/Results.js';

const apiData = {
    "data": [
      {
        "type": "gif",
        "id": "iuHaJ0D7macZq",
        "url": "http://giphy.com/gifs/cat-day-tomorrow-iuHaJ0D7macZq",
        "source": "https://www.reddit.com/r/CatGifs/comments/5f0h9a/tomorrow_is_legs_day/",
        "rating": "pg",
        "images": {
          "fixed_height": {
            "url": "http://media4.giphy.com/media/iuHaJ0D7macZq/200.gif"
          }
        }
      },
      {
        "type": "gif",
        "id": "Z1kpfgtHmpWHS",
        "url": "http://giphy.com/gifs/cat-way-make-Z1kpfgtHmpWHS",
        "source": "http://shewhoseeks.blogspot.com/2016/03/cat-gifs-that-make-me-laugh-way-more.html",
        "rating": "g",
        "images": {
          "fixed_height": {
            "url": "http://media4.giphy.com/media/Z1kpfgtHmpWHS/200.gif"
          }
        }
      }
    ],
    "meta": {
      "status": 200,
      "msg": "OK"
    },
    "pagination": {
      "total_count": 1947,
      "count": 25,
      "offset": 0
    }
  }

class Search extends React.Component {

    state = {
        query: 'default-search',
        search: '',
        submitted: false,
        resultsArray: apiData,
    }

    searchFunction = () => {
        console.log('searched!');
        this.setState({
            search: this.state.query,
            submitted: !this.state.submitted,
        })
    }

    updateQuery = (event) => {
        this.setState({
            query: event.target.value,
        })
    }

    render() {

        return <div>
            {/* <form action="GET" onSubmit={this.searchFunction}>
                <input type="text" placeholder="search input" onInput={this.updateQuery}/><br/>
                <input type="submit" value="submit search"/>
            </form>
            <button onClick={this.searchFunction}>Search v2</button> */}

            <Form searchFunction={this.searchFunction} updateQuery={this.updateQuery} />

            <h4>Query: {this.state.query}</h4>
            <h4>Search: {this.state.search}</h4>
            <h4>Submitted: {this.state.submitted}</h4>

            <Results display={this.state.submitted} array={this.state.resultsArray}/>


        </div>
    }
}

export default Search;
