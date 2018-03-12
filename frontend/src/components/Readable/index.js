import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';

class Readable extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
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
