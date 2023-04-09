import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
/* React bootstrap Configuration */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
);


