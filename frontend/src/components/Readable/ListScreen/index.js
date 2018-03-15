/**
 * @file
 * Filtered or unfiltered list of posts.
 * - Category filter
 * - Sort control
 * - Add post control
 * - List of posts
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../../actions/category';
import { fetchCategoryPosts, fetchPosts } from '../../../actions/post';
import NotFoundScreen from '../NotFoundScreen';
import CategoryList from '../CategoryList';
import PostList from './PostList';

class ListScreen extends Component {
  filterCategory = category => {
    const {history} = this.props;
    history.push('/' + category);
  }

  componentDidMount() {
    const {
      fetchCategories,
      fetchCategoryPosts,
      fetchPosts,
      match: {
        params: {
          category
        }
      }
    } = this.props;
    fetchCategories();
    typeof category === 'undefined' ? fetchPosts() : fetchCategoryPosts(category);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.category !== nextProps.match.params.category) {
      const {
        fetchCategoryPosts,
        fetchPosts,
        match: {
          params: {
            category
          }
        }
      } = nextProps;
      typeof category === 'undefined' ? fetchPosts() : fetchCategoryPosts(category);
    }
  }

  render () {
    const {
      categories
    } = this.props;
    let {
      posts,
      match: {
        params: {
          category
        }
      }
    } = this.props;
    let title = 'List of posts';
    category = category || '';
    if (category !== '') {
      if (typeof categories[category] === 'undefined') {
        return (
          <NotFoundScreen />
        );
      } else {
        title = categories[category].name;
        posts = posts.filter(post => post.category === category);
      }
    }
    return (
      <div>
        <p className="App-intro">
          {title}
        </p>
        <CategoryList
          categories={Object.values(categories)}
          filterCategory={category}
          onChangeCategory={this.filterCategory}
        />
        <PostList posts={posts} />
      </div>
    );
  }
}

function mapStateToProps ({categories, posts}) {
  return {
    categories: categories,
    posts: Object.values(posts)
  };
}

function mapDispatchToProps (dispatch) {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchCategoryPosts: category => dispatch(fetchCategoryPosts(category)),
    fetchPosts: () => dispatch(fetchPosts())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);
