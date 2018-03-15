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

export const fetchCategoryPosts = category => dispatch => {
  API
    .fetchCategoryPosts(category)
    .then(posts => dispatch(receiveCategoryPosts(posts)));
};

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const fetchPosts = () => dispatch => {
  API
    .fetchPosts()
    .then(posts => dispatch(receivePosts(posts)));
};

export const addPost = post => ({
  type: ADD_POST,
  post
});

export const newPost = post => dispatch => {
  API
    .addPost(post)
    .then(() => dispatch(addPost(post)));
};

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const fetchPost = id => dispatch => {
  API
    .fetchPost(id)
    .then(post => dispatch(receivePost(post)));
};

export const voteUpPost = post => ({
  type: UPVOTE_POST,
  post
});

export const pushVoteUpPost = post => dispatch => {
  API
    .voteUpPost(post.id)
    .then(() => dispatch(voteUpPost(post)));
};

export const voteDownPost = post => ({
  type: DOWNVOTE_POST,
  post
});

export const pushVoteDownPost = post => dispatch => {
  API
    .voteDownPost(post.id)
    .then(() => dispatch(voteDownPost(post)));
};

export const updatePost = post => ({
  type: UPDATE_POST,
  post
});

export const pushUpdatePost = post => dispatch => {
  API
    .updatePost(post)
    .then(() => dispatch(updatePost(post)));
};

export const removePost = post => ({
  type: REMOVE_POST,
  post
});

export const deletePost = post => dispatch => {
  API
    .deletePost(post.id)
    .then(() => dispatch(removePost(post)));
};
