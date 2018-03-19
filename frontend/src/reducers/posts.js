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

function posts (state = {}, action) {
  const {posts, post} = action;

  switch (action.type) {
    case RECEIVE_CATEGORY_POSTS:
    case RECEIVE_POSTS:
      return {
        ...state.posts,
        ...posts
      }
    case RECEIVE_POST:
    case ADD_POST:
    case UPDATE_POST:
    case REMOVE_POST:
    case UPVOTE_POST:
    case DOWNVOTE_POST:
      return {
        ...state,
        [post.id]: post
      };
    default:
      return state;
  }
}

export default posts;
