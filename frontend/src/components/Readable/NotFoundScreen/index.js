import React, {Component} from 'react';
import {connect} from 'react-redux';
import {receiveCategories} from '../../../actions/category';
import Navigation from '../Navigation';

class NotFoundScreen extends Component {
  componentDidMount() {
    const {categories, receiveCategories} = this.props;
    !categories && receiveCategories();
  }

  render () {
    const {history} = this.props;
    const categories = this.props.categories || {};
    return (
      <div>
        <Navigation categories={categories} history={history} />
        <p className="App-intro">
          Page not found.
        </p>
      </div>
    );
  }
}

function mapStateToProps ({categories}) {
  return {categories};
}

function mapDispatchToProps (dispatch) {
  return {receiveCategories: () => dispatch(receiveCategories())};
}

export default connect(mapStateToProps, mapDispatchToProps)(NotFoundScreen);
