/**
 * @file
 * Comment component for the comment list component.
 *
 * Details
 * - Date and time
 * - Author
 * - Body
 *
 * Components
 * - Edit
 * - Delete
 * - Score
 */

import React, { Component } from 'react';

class Comment extends Component {
  render () {
    const {comment} = this.props;
    const timestamp = new Date(comment.timestamp);
    return (
      <li className="comment-list-item">
        <div className="comment-body">{comment.body}</div>
        <div className="comment-meta">
          <div className="comment-author">{comment.author}</div>
          <div className="comment-timestamp">{timestamp.toLocaleString()}</div>
          <div className="post-votescore">{comment.voteScore}</div>
        </div>
      </li>
    );
  }
}

export default Comment;
