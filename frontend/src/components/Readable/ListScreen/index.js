/**
 * @file
 * Filtered or unfiltered list of posts.
 * - Category filter
 * - Sort control
 * - Add post control
 * - List of posts
 */

import React from 'react';
import CategoryList from '../CategoryList';
import PostList from './PostList';

const ListScreen = props => (
  <div>
    <p className="App-intro">
      List of posts
    </p>
    <CategoryList />
    <PostList />
  </div>
);

export default ListScreen;
