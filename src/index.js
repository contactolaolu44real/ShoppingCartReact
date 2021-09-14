import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Route} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import {ProductProvider} from "../src/Context.js"

ReactDOM.render(<ProductProvider><Route><App /></Route> </ProductProvider>, document.getElementById('root'));
serviceWorker.unregister();
