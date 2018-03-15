const API_HOST = process.env.REACT_APP_API_HOST;
const API_AUTHORIZATION = process.env.REACT_APP_API_AUTHORIZATION;
const headers = {
  headers: {
    Authorization: API_AUTHORIZATION
  }
};

export const fetchPostComments = parentId => {
  return fetch(API_HOST + '/posts/' + parentId + '/comments', headers)
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

export const fetchComment = id => {
  return fetch(API_HOST + '/comments/' + id, headers)
    .then(res => res.json())
    .then(json => json);
};
