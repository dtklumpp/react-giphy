import React from 'react';

class Results extends React.Component {

    render() {

        console.log('this.props.array.data:', this.props.array.data)
        console.log('this.props.display:', this.props.display)

        let visuals = false;

            visuals = this.props.array.data.map(item => {
                return <div key={item.id}>
                    <p>URL: {item.url}</p>
                    <img src={item.images.fixed_height.url} alt=""/>
                    <p>src={item.source}</p>
                </div>
            })

        return !this.props.display ?
        <h5>loading...</h5> :
        visuals ?
        visuals :
        <h5>still loading</h5>
    }
}

export default Results;
