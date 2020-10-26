import React from 'react';
import './Form.css';

class Form extends React.Component {

    render() {
        return <div>
                <input type="text" placeholder="search input" onInput={this.props.updateQuery}/><br/>
                {/* <button onClick={this.props.searchFunction}>Search v2</button> */}
            </div>
    }
}

export default Form;
