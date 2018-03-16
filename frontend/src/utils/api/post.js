import uuid from 'uuid/v4';
const API = process.env.REACT_APP_API;
const AUTHORIZATION = process.env.REACT_APP_AUTHORIZATION;
const headers = {
  Authorization: AUTHORIZATION
};

export const fetchCategoryPosts = category => fetch(API + '/' + category + '/posts', {headers})
  .then(res => res.json())
  .then(json => {
    let posts = {};
    json.map(post => {
      posts[post.id] = post;
      return post;
    });
    return posts;
  });

export const fetchPosts = () => fetch(API + '/posts', {headers})
  .then(res => res.json())
  .then(json => {
    let posts = {};
    json.map(post => {
      posts[post.id] = post;
      return post;
    });
    return posts;
  });

export const addPost = post => fetch(API + '/posts', {
  method: 'POST',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    ...post,
    id: uuid()
  })
})
  .then(res => res.json())
  .then(json => json);

export const fetchPost = id => fetch(API + '/posts/' + id, {headers})
  .then(res => res.json())
  .then(json => json);

export const voteUpPost = id => fetch(API + '/posts/' + id, {
  method: 'POST',
  headers,
  body: 'upVote'
})
  .then(res => res.json());

export const voteDownPost = id => fetch(API + '/posts/' + id, {
  method: 'POST',
  headers,
  body: 'downVote'
})
  .then(res => res.json());

export const updatePost = post => fetch(API + '/posts/' + post.id, {
  method: 'PUT',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(post)
})
  .then(res => res.json())
  .then(json => json);

export const deletePost = id => fetch(API + '/posts/' + id, {
  method: 'DELETE',
  headers,
})
  .then(res => res.json());
