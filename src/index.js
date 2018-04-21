import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Semantic from './semantic/Semantic'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Semantic />, document.getElementById('root'));
registerServiceWorker();
