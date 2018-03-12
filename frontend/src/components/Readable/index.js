import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PostList from './PostList';
import PostDetail from './PostDetail';
import logo from './logo.svg';
import './index.css';

class Readable extends Component {
  state = {
    category: '',
    post: ''
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Readable</h1>
        </header>
        <Switch>
          <Route exact path="/" render={() => (
            <PostList />
          )}/>
          <Route exact path="/category/*" render={() => (
            <PostList category={this.state.category} />
          )}/>
          <Route exact path="/post/*" render={() => (
            <PostDetail post={this.state.post} />
          )}/>
          <Route render={() => (
            <p className="App-intro">
              Page not found.
            </p>
          )}/>
        </Switch>
      </div>
    );
  }
}

export default Readable;

/**
 * Routes
 * - /
 *   - List of categories
 *   - List of posts
 *     - Sort control
 *     - Add post control
 * - /{category}
 *   - Filtered list of posts
 *     - Sort control
 *     - Add post control
 * - /post/{id}
 *   - Post details (with score and number of comments)
 *   - Comments (with score)
 *   - Post vote, edit and delete controls
 *   - New comment control
 *   - Comment modal
 *   - Comment vote, edit and delete controls
 * - /post
 *   - 
 */
