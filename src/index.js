import React from 'react';
import Home from './Home.js';
import './index.css'
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker.js';

ReactDOM.render(<Home/>, document.getElementById('root'))

serviceWorker.unregister();
