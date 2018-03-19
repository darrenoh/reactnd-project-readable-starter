import uuid from 'uuid/v4';
const API = process.env.REACT_APP_API;
const AUTHORIZATION = process.env.REACT_APP_AUTHORIZATION;
const headers = {
  Authorization: AUTHORIZATION
};

export const fetchPostComments = parentId => fetch(API + '/posts/' + parentId + '/comments', {headers})
  .then(res => res.json())
  .then(json => {
    let comments = {};
    json.forEach(comment => {
      comments[comment.id] = comment;
    });
    return comments;
  });

export const addComment = comment => fetch(API + '/comments', {
  method: 'POST',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    ...comment,
    id: uuid(),
    timestamp: Date.now()
  })
})
  .then(res => res.json());

export const fetchComment = id => fetch(API + '/comments/' + id, {headers})
  .then(res => res.json())
  .then(json => json);

export const voteUpComment = id => fetch(API + '/comments/' + id, {
  method: 'POST',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({option: 'upVote'})
})
  .then(res => res.json());

export const voteDownComment = id => fetch(API + '/comments/' + id, {
  method: 'POST',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({option: 'downVote'})
})
  .then(res => res.json());

export const updateComment = comment => fetch(API + '/comments/' + comment.id, {
  method: 'PUT',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    ...comment,
    timestamp: Date.now()
  })
})
  .then(res => res.json());

export const deleteComment = id => fetch(API + '/comments/' + id, {
  method: 'DELETE',
  headers
})
  .then(res => res.json());
