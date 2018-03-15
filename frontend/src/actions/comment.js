import * as API from '../utils/api/comment';

export const RECEIVE_POST_COMMENTS = 'RECEIVE_POST_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT';
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT';

export const receivePostComments = ({parentId, comments}) => ({
  type: RECEIVE_POST_COMMENTS,
  parentId,
  comments
});

export const fetchPostComments = parentId => dispatch => {
  API
    .fetchPostComments(parentId)
    .then(comments => dispatch(receivePostComments({
      parentId,
      comments
    })));
};

export const addComment = comment => ({
  type: ADD_COMMENT,
  comment
});

export const pushComment = comment => dispatch => {
  API
    .pushComment(comment)
    .then(comment => dispatch(addComment(comment)));
};

export const receiveComment = comment => ({
  type: RECEIVE_POST_COMMENTS,
  comment
});

export const fetchComment = id => dispatch => {
  API
    .fetchComment(id)
    .then(comment => dispatch(receiveComment(comment)));
};

export const voteUpComment = comment => ({
  type: UPVOTE_COMMENT,
  comment
});

export const pushVoteUpComment = comment => dispatch => {
  API
    .voteUpComment(comment.id)
    .then(() => dispatch(voteUpComment(comment)));
};

export const voteDownComment = comment => ({
  type: DOWNVOTE_COMMENT,
  comment
});

export const pushVoteDownComment = comment => dispatch => {
  API
    .voteDownComment(comment.id)
    .then(() => dispatch(voteDownComment(comment)));
};

export const updateComment = comment => ({
  type: UPDATE_COMMENT,
  comment
});

export const pushUpdateComment = comment => dispatch => {
  API
    .updateComment(comment)
    .then(() => dispatch(updateComment(comment)));
};

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const deleteComment = comment => dispatch => {
  API
    .deleteComment(comment.id)
    .then(() => dispatch(removeComment(comment)));
};
