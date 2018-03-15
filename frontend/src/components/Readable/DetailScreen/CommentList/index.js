/**
 * @file
 * Comment list component for post detail view.
 *
 * Components:
 * - Comment
 * - Add
 * - Form
 */

import React from 'react';
import Comment from './Comment';

const CommentList = ({comments}) => (
  <ul className="comment-list">
    {comments.filter(comment => !comment.deleted).map(comment => (
      <Comment key={comment.id} comment={comment} />
    ))}
  </ul>
);

export default CommentList;
