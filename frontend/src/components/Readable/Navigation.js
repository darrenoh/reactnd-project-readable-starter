import React, {Component} from 'react';

class Navigation extends Component {
  filterCategory = category => {
    const {history} = this.props;
    history.push('/' + category);
  }

  render () {
    const {categories} = this.props;
    return (
      <nav className="readable-navigation">
        <select value="navigation" onChange={event => this.filterCategory(event.target.value)}>
          <option value="navigation" disabled>Navigate</option>
          <option value="">Main page</option>
          <optgroup label="Categories">
            {Object.values(categories).map(category => (
              <option key={category.path} value={category.path}>
                {category.name}
              </option>
            ))}
          </optgroup>
        </select>
      </nav>
    );
  }
}

export default Navigation;
