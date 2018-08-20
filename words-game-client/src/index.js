import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import GameClientWindow from './words_client.js';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<GameClientWindow />, document.getElementById('root'));

registerServiceWorker();
