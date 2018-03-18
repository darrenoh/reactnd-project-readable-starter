/**
 * @file
 * Category list component for root view and post edit form.
 */

import React from 'react';

const CategoryList = props => {
  return props.onChangeCategory ? (
    <select
      className="category-list"
      value={props.filterCategory}
      onChange={event => props.onChangeCategory(event.target.value)}
    >
      <option value="">All</option>
      {props.categories.map(category => (
        <option key={category.path} value={category.path}>
          {category.name}
        </option>
      ))}
    </select>
  ) : (
    <select
      name={props.name}
      className="category-list"
      value={props.value}
      onChange={props.onChange}
    >
      <option value="" disabled>Category</option>
      {props.categories.map(category => (
        <option key={category.path} value={category.path}>
          {category.name}
        </option>
      ))}
    </select>
  )
};

export default CategoryList;
