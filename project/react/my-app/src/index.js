import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Circle from './Circle';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Circle />, document.getElementById('root'));
registerServiceWorker();
