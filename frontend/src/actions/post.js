import * as API from '../utils/api/post';

export const RECEIVE_CATEGORY_POSTS = 'RECEIVE_CATEGORY_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const UPVOTE_POST = 'UPVOTE_POST';
export const DOWNVOTE_POST = 'DOWNVOTE_POST';

export const receiveCategoryPosts = posts => ({
  type: RECEIVE_CATEGORY_POSTS,
  posts
});

export const fetchCategoryPosts = category => dispatch => (
  API
    .fetchCategoryPosts(category)
    .then(posts => dispatch(receiveCategoryPosts(posts)))
);

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const fetchPosts = () => dispatch => (
  API
    .fetchPosts()
    .then(posts => dispatch(receivePosts(posts)))
);

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const fetchPost = () => dispatch => (
  API
    .fetchPost()
    .then(post => dispatch(receivePost(post)))
);

export function addPost (post) {
  return {
    type: ADD_POST,
    post
  };
}

export function removePost (post) {
  return {
    type: REMOVE_POST,
    post
  };
}

export function updatePost (post) {
  return {
    type: UPDATE_POST,
    post
  };
}

export function upVotePost (post) {
  return {
    type: UPVOTE_POST,
    post
  };
}

export function downVotePost (post) {
  return {
    type: DOWNVOTE_POST,
    post
  };
}
