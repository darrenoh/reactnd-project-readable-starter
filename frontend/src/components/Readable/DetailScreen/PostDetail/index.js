/**
 * @file
 * Post detail.
 */

import React, { Component } from 'react';

class PostDetail extends Component {
  render () {
    const {post} = this.props;
    const timestamp = new Date(post.timestamp);
    return (
      <div className="post">
        <div className="post-body">{post.body}</div>
        <div className="post-meta">
          <div className="post-author">{post.author}</div>
          <div className="post-timestamp">{timestamp.toLocaleString()}</div>
          <div className="post-votescore">{post.voteScore}</div>
        </div>
      </div>
    );
  }
}

export default PostDetail;
