const API = process.env.REACT_APP_API;
const AUTHORIZATION = process.env.REACT_APP_AUTHORIZATION;
const headers = {
  Authorization: AUTHORIZATION
};

export const fetchPostComments = parentId => {
  return fetch(API + '/posts/' + parentId + '/comments', {headers})
    .then(res => res.json())
    .then(json => {
      let comments = {};
      json.map(comment => {
        comments[comment.id] = comment;
        return comment;
      });
      return comments;
    });
};

export const pushComment = comment => {
  return fetch(API + '/comments', {
    method: 'POST',
    headers,
    body: JSON.stringify(comment)
  }).then(res => res.json())
    .then(() => comment);
};

export const fetchComment = id => {
  return fetch(API + '/comments/' + id, {headers})
    .then(res => res.json())
    .then(json => json);
};

export const voteUpComment = id => {
  return fetch(API + '/comments/' + id, {
    method: 'POST',
    headers,
    body: 'upVote'
  }).then(res => res.json());
};

export const voteDownComment = id => {
  return fetch(API + '/comments/' + id, {
    method: 'POST',
    headers,
    body: 'downVote'
  }).then(res => res.json());
};

export const updateComment = comment => {
  return fetch(API + '/comments/' + comment.id, {
    method: 'PUT',
    headers,
    body: JSON.stringify(comment)
  }).then(res => res.json());
};

export const deleteComment = id => {
  return fetch(API + '/comments/' + id, {
    method: 'DELETE',
    headers
  }).then(res => res.json());
};
