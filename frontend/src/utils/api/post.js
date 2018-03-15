const API_HOST = process.env.REACT_APP_API_HOST;
const API_AUTHORIZATION = process.env.REACT_APP_API_AUTHORIZATION;
const headers = {
  headers: {
    Authorization: API_AUTHORIZATION
  }
};

export const fetchCategoryPosts = category => {
  return fetch(API_HOST + '/' + category + '/posts', headers)
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
  return fetch(API_HOST + '/posts', headers)
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

export const fetchPost = id => {
  return fetch(API_HOST + '/posts/' + id, headers)
    .then(res => res.json())
    .then(json => json);
};
