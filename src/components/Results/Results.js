import React from 'react';

class Results extends React.Component {

    render() {

        let resultsList = "";
        if(this.props.results) {
            resultsList = this.props.results.map(item => {
                return <div key={item.id}>
                    <p>URL: {item.url}</p>
                    <img src={item.images.fixed_height.url} alt=""/>
                    <p>src={item.source}</p>
                </div>
            })
        }

        return !this.props.display ?
        <h5>loading...</h5> :
        <div>
            {resultsList}
        </div>
    }
}

export default Results;
