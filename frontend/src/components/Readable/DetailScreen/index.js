/**
 * @file
 * Post detail view.
 *
 * Components
 * - Post
 * - Edit
 * - Delete
 * - CommentList
 */

import React from 'react';
import PostDetail from './PostDetail';
import CommentList from './CommentList';

const DetailScreen = props => (
  <div>
    <p className="App-intro">
      Post detail
    </p>
    <PostDetail />
    <CommentList />
  </div>
);

export default DetailScreen;
