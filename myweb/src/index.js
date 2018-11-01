import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import App from './components/App';
import * as serviceWorker from './components/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
