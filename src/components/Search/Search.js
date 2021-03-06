import React from 'react';
import './Search.css';
import Form from '../Form/Form.js';
import Results from '../Results/Results.js';

class Search extends React.Component {

    state = {
        query: 'default-search',
        submitted: false,
        results: null,
    }

    updateQuery = (event) => {
        this.setState({
            query: event.target.value,
        })
        const query = event.target.value;
        const URL = `https://api.giphy.com/v1/gifs/search?api_key=KMBRoE1jJJGOAxWVv0Knnr60xDHRlkt3&q=${query}&limit=25&offset=0&rating=g&lang=en`;
        fetch(URL)
        .then(res => res.json())
        .then(json => {
            this.setState({
                submitted: true,
                results: json.data,
            })
        });
    }

    render() {
        return <div>
            <Form searchFunction={this.searchFunction} updateQuery={this.updateQuery} />
            <Results display={this.state.submitted} results={this.state.results}/>
        </div>
    }
}

export default Search;


// const apiData = {
//     "data": [
//       {
//         "type": "gif",
//         "id": "iuHaJ0D7macZq",
//         "url": "http://giphy.com/gifs/cat-day-tomorrow-iuHaJ0D7macZq",
//         "source": "https://www.reddit.com/r/CatGifs/comments/5f0h9a/tomorrow_is_legs_day/",
//         "rating": "pg",
//         "images": {
//           "fixed_height": {
//             "url": "http://media4.giphy.com/media/iuHaJ0D7macZq/200.gif"
//           }
//         }
//       },
//       {
//         "type": "gif",
//         "id": "Z1kpfgtHmpWHS",
//         "url": "http://giphy.com/gifs/cat-way-make-Z1kpfgtHmpWHS",
//         "source": "http://shewhoseeks.blogspot.com/2016/03/cat-gifs-that-make-me-laugh-way-more.html",
//         "rating": "g",
//         "images": {
//           "fixed_height": {
//             "url": "http://media4.giphy.com/media/Z1kpfgtHmpWHS/200.gif"
//           }
//         }
//       }
//     ],
//     "meta": {
//       "status": 200,
//       "msg": "OK"
//     },
//     "pagination": {
//       "total_count": 1947,
//       "count": 25,
//       "offset": 0
//     }
//   }
