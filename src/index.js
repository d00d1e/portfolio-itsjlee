import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './index.css';

document.addEventListener("DOMContentLoaded", (e) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.Fragment>
        <App />
      </React.Fragment>
    </BrowserRouter>,
    document.getElementById('root')
  );
});



