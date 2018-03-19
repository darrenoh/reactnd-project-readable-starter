import {
  RECEIVE_POST_COMMENTS,
  RECEIVE_COMMENT,
  ADD_COMMENT,
  REMOVE_COMMENT,
  UPDATE_COMMENT,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT
} from '../actions/comment';

function comments (state = {}, action) {
  const {parentId, comments, comment} = action;

  switch (action.type) {
    case RECEIVE_POST_COMMENTS:
      return {
        ...state,
        [parentId]: comments
      }
    case RECEIVE_COMMENT:
    case ADD_COMMENT:
    case UPDATE_COMMENT:
    case REMOVE_COMMENT:
    case UPVOTE_COMMENT:
    case DOWNVOTE_COMMENT:
      return {
        ...state,
        [comment.parentId]: {
          ...state[comment.parentId],
          [comment.id]: comment
        }
      };
    default:
      return state;
  }
}

export default comments;
