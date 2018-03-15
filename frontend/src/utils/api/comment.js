const API_HOST = process.env.REACT_APP_API_HOST;
const API_AUTHORIZATION = process.env.REACT_APP_API_AUTHORIZATION;
const headers = {
  headers: {
    Authorization: API_AUTHORIZATION
  }
};

export const fetchPostComments = id => {
  return fetch(API_HOST + '/posts/' + id + '/comments', headers)
    .then(res => res.json());
};

export const fetchComment = id => {
  return fetch(API_HOST + '/comments/' + id, headers)
    .then(res => res.json());
};
