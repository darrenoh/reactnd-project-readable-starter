import { combineReducers } from 'redux';
import {
  RECEIVE_CATEGORIES
} from '../actions/category';
import {
  RECEIVE_CATEGORY_POSTS,
  RECEIVE_POSTS,
  RECEIVE_POST,
  ADD_POST,
  REMOVE_POST,
  UPDATE_POST,
  UPVOTE_POST,
  DOWNVOTE_POST
} from '../actions/post';
import {
  RECEIVE_POST_COMMENTS,
  RECEIVE_COMMENT,
  ADD_COMMENT,
  REMOVE_COMMENT,
  UPDATE_COMMENT,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT
} from '../actions/comment';

function categories (state = [], action) {
  const { categories } = action;

  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return categories;
    default:
      return state;
  }
}

function posts (state = {}, action) {
  const {posts, post} = action;

  switch (action.type) {
    case RECEIVE_CATEGORY_POSTS:
    case RECEIVE_POSTS:
      return {
        ...posts,
        ...state.posts
      }
    case RECEIVE_POST:
    case ADD_POST:
    case UPDATE_POST:
      return {
        ...state,
        [post.id]: post
      };
    case REMOVE_POST:
      return {
        ...state,
        [post.id]: null
      };
    case UPVOTE_POST:
      return {
        ...state,
        [post.id]: {
          ...state.posts[post.id],
          voteScore: ++state.posts[post.id].voteScore
        }
      };
    case DOWNVOTE_POST:
      return {
        ...state,
        [post.id]: {
          ...state.posts[post.id],
          voteScore: --state.posts[post.id].voteScore
        }
      };
    default:
      return state;
  }
}

function comments (state = {}, action) {
  const { comments, comment } = action;

  switch (action.type) {
    case RECEIVE_POST_COMMENTS:
      return {
        ...state,
        comments: {
          ...comments,
          ...state.comments
        }
      }
    case RECEIVE_COMMENT:
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
  categories,
  posts,
  comments
});
