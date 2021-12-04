import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import firebaseConfig from './api/apiKeys';
import Initialize from './Initialize';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Initialize />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
