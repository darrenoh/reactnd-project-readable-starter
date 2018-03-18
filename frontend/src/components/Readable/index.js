import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ListScreen from './ListScreen';
import DetailScreen from './DetailScreen';
import EditScreen from './EditScreen';
import NotFoundScreen from './NotFoundScreen';
import logo from './logo.svg';
import './index.css';

const Readable = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Readable</h1>
    </header>
    <Switch>
      <Route exact path="/add" component={EditScreen} />
      <Route exact path="/post/:id/edit" component={EditScreen} />
      <Route path="/post/:id" component={DetailScreen} />
      <Route exact path="/:category" component={ListScreen} />
      <Route exact path="/:category/add" component={EditScreen} />
      <Route exact path="/" component={ListScreen} />
      <Route component={NotFoundScreen} />
    </Switch>
  </div>
);

export default Readable;
