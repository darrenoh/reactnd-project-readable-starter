import * as API from '../utils/api/comment';

export const RECEIVE_POST_COMMENTS = 'RECEIVE_POST_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT';
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT';

export const receivePostComments = parentId => dispatch => API
  .fetchPostComments(parentId)
  .then(comments => dispatch({
    type: RECEIVE_POST_COMMENTS,
    parentId,
    comments
  }));

export const addComment = comment => dispatch => API
  .pushComment(comment)
  .then(() => dispatch({
    type: ADD_COMMENT,
    comment
  }));

export const receiveComment = id => dispatch => API
  .fetchComment(id)
  .then(comment => dispatch({
    type: RECEIVE_POST_COMMENTS,
    comment
  }));

export const voteUpComment = comment => dispatch => API
  .voteUpComment(comment.id)
  .then(() => dispatch({
    type: UPVOTE_COMMENT,
    comment
  }));

export const voteDownComment = comment => dispatch => API
  .voteDownComment(comment.id)
  .then(() => dispatch({
    type: DOWNVOTE_COMMENT,
    comment
  }));

export const updateComment = comment => dispatch => API
  .updateComment(comment)
  .then(() => dispatch({
    type: UPDATE_COMMENT,
    comment
  }));

export const deleteComment = comment => dispatch => API
  .deleteComment(comment.id)
  .then(() => dispatch({
    type: REMOVE_COMMENT,
    comment
  }));
