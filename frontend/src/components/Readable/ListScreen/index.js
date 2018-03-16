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
import { receiveCategories } from '../../../actions/category';
import { receiveCategoryPosts, receivePosts } from '../../../actions/post';
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
      receiveCategories,
      receiveCategoryPosts,
      receivePosts,
      match: {
        params: {
          category
        }
      }
    } = this.props;
    receiveCategories();
    typeof category === 'undefined' ? receivePosts() : receiveCategoryPosts(category);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.category !== nextProps.match.params.category) {
      const {
        receiveCategoryPosts,
        receivePosts,
        match: {
          params: {
            category
          }
        }
      } = nextProps;
      typeof category === 'undefined' ? receivePosts() : receiveCategoryPosts(category);
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
    receiveCategories: () => dispatch(receiveCategories()),
    receiveCategoryPosts: category => dispatch(receiveCategoryPosts(category)),
    receivePosts: () => dispatch(receivePosts())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);
