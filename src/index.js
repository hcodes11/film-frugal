import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import firebase from 'firebase';
import firebaseConfig from './api/apiKeys';
import Initialize from './Initialize';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <Initialize />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
