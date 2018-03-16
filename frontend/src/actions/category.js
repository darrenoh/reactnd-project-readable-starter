import * as API from '../utils/api/category';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

export const receiveCategories = () => dispatch => API
  .fetchCategories()
  .then(categories => dispatch({
    type: RECEIVE_CATEGORIES,
    categories
  }));
