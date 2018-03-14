import { combineReducers } from 'redux';
import {
  ADD_POST,
  REMOVE_POST,
  UPDATE_POST,
  UPVOTE_POST,
  DOWNVOTE_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  UPDATE_COMMENT,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT
} from '../actions';

const initialPostsState = {
}

const initialCommentsState = {
}

function posts (state = {}, action) {
  const { post } = action;

  switch (action.type) {
    case ADD_POST:
    case UPDATE_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          [post.id]: post
        }
      };
    case REMOVE_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          [post.id]: null
        }
      };
    case UPVOTE_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          [post.id]: {
            ...state.posts[post.id],
            voteScore: ++state.posts[post.id].voteScore
          }
        }
      };
    case DOWNVOTE_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          [post.id]: {
            ...state.posts[post.id],
            voteScore: --state.posts[post.id].voteScore
          }
        }
      };
    default:
      return state;
  }
}

function comments (state = {}, action) {
  const { comment } = action;

  switch (action.type) {
    case ADD_COMMENT:
    case UPDATE_COMMENT:
      return {
        ...state,
        comments: {
          ...state.comments,
          [comment.id]: comment
        }
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        comments: {
          ...state.comments,
          [comment.id]: null
        }
      };
    case UPVOTE_COMMENT:
      return {
        ...state,
        comments: {
          ...state.comments,
          [comment.id]: {
            ...state.comments[comment.id],
            voteScore: ++state.comments[comment.id].voteScore
          }
        }
      };
    case DOWNVOTE_COMMENT:
      return {
        ...state,
        comments: {
          ...state.comments,
          [comment.id]: {
            ...state.comments[comment.id],
            voteScore: --state.comments[comment.id].voteScore
          }
        }
      };
    default:
      return state;
  }
}

export default combineReducers({
  posts,
  comments
});
