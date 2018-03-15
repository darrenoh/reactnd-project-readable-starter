import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ListScreen from './ListScreen';
import DetailScreen from './DetailScreen';
import NotFoundScreen from './NotFoundScreen';
import logo from './logo.svg';
import './index.css';

const Readable = props => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Readable</h1>
    </header>
    <Switch>
      <Route path="/post/:id" component={DetailScreen} />
      <Route exact path="/:category*" component={ListScreen} />
      <Route component={NotFoundScreen} />
    </Switch>
  </div>
);

export default Readable;
