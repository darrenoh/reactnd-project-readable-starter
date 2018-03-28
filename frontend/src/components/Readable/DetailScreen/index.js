import React, {Component} from 'react';
import {connect} from 'react-redux';
import {receiveCategories} from '../../../actions/category';
import {receivePost} from '../../../actions/post';
import Navigation from '../Navigation';
import NotFoundScreen from '../NotFoundScreen';
import PostDetail from './PostDetail';
import CommentList from './CommentList';
import './index.css';

class DetailScreen extends Component {
  componentDidMount() {
    const {
      categories,
      receiveCategories,
      receivePost,
      match: {
        params: {
          id
        }
      }
    } = this.props;
    !categories && receiveCategories();
    receivePost(id);
  }

  componentWillReceiveProps(nextProps) {
    const {
      receivePost,
      match: {
        params: {
          id
        }
      }
    } = nextProps;
    if (id !== this.props.match.params.id) {
      receivePost(id);
    }
  }

  render () {
    const categories = this.props.categories || {};
    const {
      posts,
      history,
      match: {
        url,
        params: {
          id
        }
      }
    } = this.props;
    if (!posts[id] || posts[id].deleted) {
      return (
        <NotFoundScreen history={history} />
      );
    } else {
      return (
        <div className="readable-body">
          <Navigation categories={categories} history={history} />
          <main>
            <p className="App-intro">
              {posts[id].title}
            </p>
            <PostDetail post={posts[id]} url={url} history={history} />
            <CommentList parentId={id} />
          </main>
        </div>
      );
    }
  }
}

function mapStateToProps ({categories, posts}) {
  return {categories, posts};
}

function mapDispatchToProps (dispatch) {
  return {
    receiveCategories: () => dispatch(receiveCategories()),
    receivePost: id => dispatch(receivePost(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
