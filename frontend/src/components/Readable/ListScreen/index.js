import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {receiveCategories} from '../../../actions/category';
import {receiveCategoryPosts, receivePosts} from '../../../actions/post';
import Navigation from '../Navigation';
import NotFoundScreen from '../NotFoundScreen';
import PostList from './PostList';

class ListScreen extends Component {
  componentDidMount() {
    const {
      categories,
      receiveCategories,
      receiveCategoryPosts,
      receivePosts,
      match: {
        params: {
          category
        }
      }
    } = this.props;
    !categories && receiveCategories();
    category ? receiveCategoryPosts(category) : receivePosts();
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
      category ? receiveCategoryPosts(category) : receivePosts();
    }
  }

  render () {
    const {history} = this.props;
    let {
      categories,
      posts,
      match: {
        url,
        params: {
          category
        }
      }
    } = this.props;
    let title = 'List of posts';
    categories = categories || {};
    category = category || '';
    if (category !== '') {
      if (typeof categories[category] === 'undefined') {
        return (
          <NotFoundScreen history={history} />
        );
      } else {
        title = categories[category].name;
        posts = posts.filter(post => post.category === category);
      }
    }
    return (
      <div>
        <Navigation categories={categories} history={history} />
        <p className="App-intro">
          {title}
        </p>
        <Link to={(url === '/' ? '' : url) + '/add'}>Add</Link>
        <PostList history={history} posts={posts} />
      </div>
    );
  }
}

function mapStateToProps ({categories, posts}) {
  return {
    categories,
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
