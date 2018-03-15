const API = process.env.REACT_APP_API;
const AUTHORIZATION = process.env.REACT_APP_AUTHORIZATION;
const headers = {
  Authorization: AUTHORIZATION
};

export const fetchCategoryPosts = category => {
  return fetch(API + '/' + category + '/posts', {headers})
    .then(res => res.json())
    .then(json => {
      let posts = {};
      json.map(post => {
        posts[post.id] = post;
        return post;
      });
      return posts;
    });
};

export const fetchPosts = () => {
  return fetch(API + '/posts', {headers})
    .then(res => res.json())
    .then(json => {
      let posts = {};
      json.map(post => {
        posts[post.id] = post;
        return post;
      });
      return posts;
    });
};

export const addPost = post => {
  fetch(API + '/posts', {
    method: 'POST',
    headers,
    body: JSON.stringify(post)
  }).then(res => res.json());
};

export const fetchPost = id => {
  return fetch(API + '/posts/' + id, {headers})
    .then(res => res.json())
    .then(json => json);
};

export const voteUpPost = id => {
  return fetch(API + '/posts/' + id, {
    method: 'POST',
    headers,
    body: 'upVote'
  }).then(res => res.json());
};

export const voteDownPost = id => {
  return fetch(API + '/posts/' + id, {
    method: 'POST',
    headers,
    body: 'downVote'
  }).then(res => res.json());
};

export const updatePost = post => {
  return fetch(API + '/posts/' + post.id, {
    method: 'PUT',
    headers,
    body: JSON.stringify(post)
  }).then(res => res.json());
};

export const deletePost = id => {
  return fetch(API + '/posts/' + id, {
    method: 'DELETE',
    headers,
  });
};
