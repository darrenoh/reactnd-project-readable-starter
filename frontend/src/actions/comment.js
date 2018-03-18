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
  .addComment(comment)
  .then(comment => dispatch({
    type: ADD_COMMENT,
    comment
  }));

export const receiveComment = id => dispatch => API
  .fetchComment(id)
  .then(comment => dispatch({
    type: RECEIVE_POST_COMMENTS,
    comment
  }));

export const voteUpComment = id => dispatch => API
  .voteUpComment(id)
  .then(comment => dispatch({
    type: UPVOTE_COMMENT,
    comment
  }));

export const voteDownComment = id => dispatch => API
  .voteDownComment(id)
  .then(comment => dispatch({
    type: DOWNVOTE_COMMENT,
    comment
  }));

export const updateComment = comment => dispatch => API
  .updateComment(comment)
  .then(comment => dispatch({
    type: UPDATE_COMMENT,
    comment
  }));

export const deleteComment = id => dispatch => API
  .deleteComment(id)
  .then(comment => dispatch({
    type: REMOVE_COMMENT,
    comment
  }));
