import * as API from '../utils/api/post';

export const RECEIVE_CATEGORY_POSTS = 'RECEIVE_CATEGORY_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const UPVOTE_POST = 'UPVOTE_POST';
export const DOWNVOTE_POST = 'DOWNVOTE_POST';

export const receiveCategoryPosts = category => dispatch => API
  .fetchCategoryPosts(category)
  .then(posts => dispatch({
    type: RECEIVE_CATEGORY_POSTS,
    posts
  }));

export const receivePosts = () => dispatch => API
  .fetchPosts()
  .then(posts => dispatch({
    type: RECEIVE_POSTS,
    posts
  }));

export const addPost = post => dispatch =>  API
  .addPost(post)
  .then(post => dispatch({
    type: ADD_POST,
    post
  }));

export const receivePost = id => dispatch => API
  .fetchPost(id)
  .then(post => dispatch({
    type: RECEIVE_POST,
    post
  }));

export const voteUpPost = post => dispatch => API
  .voteUpPost(post.id)
  .then(() => dispatch({
    type: UPVOTE_POST,
    post
  }));

export const voteDownPost = post => dispatch => API
  .voteDownPost(post.id)
  .then(() => dispatch({
    type: DOWNVOTE_POST,
    post
  }));

export const updatePost = post => dispatch => API
  .updatePost(post)
  .then(post => dispatch({
    type: UPDATE_POST,
    post
  }));

export const deletePost = id => dispatch => API
  .deletePost(id)
  .then(post => dispatch({
    type: REMOVE_POST,
    post
  }));
