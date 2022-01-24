import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes'
import ErrorBoundary from './Errors/ErrorBoundaries';

ReactDOM.render(
  <ErrorBoundary>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ErrorBoundary>,
  document.getElementById('root')
);