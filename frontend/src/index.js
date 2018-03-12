import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Readable from './components/Readable';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter><Readable /></BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
