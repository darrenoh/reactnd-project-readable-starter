import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import Readable from './components/Readable';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers';

const store = createStore(reducer);

ReactDOM.render(
  <Provider  store={store}>
    <BrowserRouter>
      <Readable />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
