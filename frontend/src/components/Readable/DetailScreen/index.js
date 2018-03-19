/**
 * @file
 * Post detail view.
 *
 * Components
 * - Post
 * - Edit
 * - Delete
 * - CommentList
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {receivePost} from '../../../actions/post';
import NotFoundScreen from '../NotFoundScreen';
import PostDetail from './PostDetail';
import CommentList from './CommentList';

class DetailScreen extends Component {
  componentDidMount() {
    const {
      receivePost,
      match: {
        params: {
          id
        }
      }
    } = this.props;
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
        <NotFoundScreen />
      );
    }
    else {
      return (
        <div>
          <p className="App-intro">
            {posts[id].title}
          </p>
          <PostDetail post={posts[id]} url={url} history={history} />
          <CommentList parentId={id} />
        </div>
      );
    }
  }
}

function mapStateToProps (state) {
  return {posts: state.posts};
}

function mapDispatchToProps (dispatch) {
  return {receivePost: id => dispatch(receivePost(id))};
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
