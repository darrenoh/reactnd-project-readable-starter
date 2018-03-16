import {RECEIVE_CATEGORIES} from '../actions/category';

function categories (state = null, action) {
  const { categories } = action;

  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return categories;
    default:
      return state;
  }
}

export default categories;
