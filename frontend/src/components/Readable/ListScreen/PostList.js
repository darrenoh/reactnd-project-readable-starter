import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({posts}) => (
  <ul className="post-list">
    {posts.filter(post => !post.deleted).map(post => (
      <li className="post-list-item" key={post.id}>
        <Link to={'/post/' + post.id}>{post.title}</Link>
      </li>
    ))}
  </ul>
);

export default PostList;
