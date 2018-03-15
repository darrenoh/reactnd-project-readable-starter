/**
 * @file
 * Post component for post list and post detail views.
 *
 * Details:
 * - Title
 * - Date and time
 * - Author
 * - Number of comments
 * - Body
 *
 * Components
 * - Score
 */

import React from 'react';

const Post = ({post}) => (
  <li className="post">
    <h3 className="post-title">{post.title}</h3>
    <div className="post-meta">
      <span className="post-author">{post.author}</span>
      <span className="post-author">{post.author}</span>
    </div>
    <div className="post-body">{post.body}</div>
  </li>
);

export default Post;
