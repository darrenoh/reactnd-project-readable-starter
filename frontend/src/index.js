import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import Readable from './components/Readable';
import registerServiceWorker from './registerServiceWorker';
import categories from './reducers/categories';
import posts from './reducers/posts';
import comments from './reducers/comments';

const store = createStore(combineReducers({
  categories,
  posts,
  comments
}), applyMiddleware(thunk));

ReactDOM.render(
  <Provider  store={store}>
    <BrowserRouter>
      <Readable />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
