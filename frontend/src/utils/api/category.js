const API_HOST = process.env.REACT_APP_API_HOST;
const API_AUTHORIZATION = process.env.REACT_APP_API_AUTHORIZATION;
const headers = {
  headers: {
    Authorization: API_AUTHORIZATION
  }
};

export const fetchCategories = () => {
  return fetch(API_HOST + '/categories', headers)
    .then(res => res.json())
    .then((json) => {
      let categories = {};
      json.categories.map(category => {
        categories[category.path] = category;
        return category;
      });
      return categories;
    });
};
