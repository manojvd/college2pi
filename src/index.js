import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import Footer from './Footer';

ReactDOM.render(
  <React.StrictMode>
  <Home />
  <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
