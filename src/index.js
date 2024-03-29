import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './App/App';

ReactDOM.render(
  <>
    <Router basename="/">
      <App />
    </Router>
  </>,
  document.getElementById('root'),
);
