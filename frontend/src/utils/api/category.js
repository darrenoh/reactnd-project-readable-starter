const API = process.env.REACT_APP_API;
const AUTHORIZATION = process.env.REACT_APP_AUTHORIZATION;
const headers = {
  Authorization: AUTHORIZATION
};

export const fetchCategories = () => {
  return fetch(API + '/categories', {headers})
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
