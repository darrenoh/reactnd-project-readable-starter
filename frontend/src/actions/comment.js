import * as API from '../utils/api/comment';

export const RECEIVE_POST_COMMENTS = 'RECEIVE_POST_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT';
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT';

export const receivePostComments = comments => ({
  type: RECEIVE_POST_COMMENTS,
  comments
});

export const fetchPostComments = () => dispatch => (
  API
    .fetchPostComments()
    .then(comments => dispatch(receivePostComments(comments)))
);

export const receiveComment = comment => ({
  type: RECEIVE_POST_COMMENTS,
  comment
});

export const fetchComment = () => dispatch => (
  API
    .fetchComment()
    .then(comment => dispatch(receiveComment(comment)))
);

export function addComment (comment) {
  return {
    type: ADD_COMMENT,
    comment
  };
}

export function removeComment (comment) {
  return {
    type: REMOVE_COMMENT,
    comment
  };
}

export function updateComment (comment) {
  return {
    type: UPDATE_COMMENT,
    comment
  };
}

export function upVoteComment (comment) {
  return {
    type: UPVOTE_COMMENT,
    comment
  };
}

export function downVoteComment (comment) {
  return {
    type: DOWNVOTE_COMMENT,
    comment
  };
}
