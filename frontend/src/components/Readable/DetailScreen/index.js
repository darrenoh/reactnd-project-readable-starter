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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { receivePost } from '../../../actions/post';
import { receivePostComments } from '../../../actions/comment';
import NotFoundScreen from '../NotFoundScreen';
import PostDetail from './PostDetail';
import CommentList from './CommentList';

class DetailScreen extends Component {
  componentDidMount() {
    const {
      receivePost,
      receivePostComments,
      match: {
        params: {
          id
        }
      }
    } = this.props;
    receivePost(id);
    receivePostComments(id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      const {
        receivePost,
        receivePostComments,
        match: {
          params: {
            id
          }
        }
      } = nextProps;
      receivePost(id);
      receivePostComments(id);
    }
  }

  render () {
    const {
      posts,
      match: {
        url,
        params: {
          id
        }
      }
    } = this.props;
    const comments = this.props.comments[id] || {};
    if (typeof posts[id] === 'undefined' || posts[id].deleted) {
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
          <PostDetail post={posts[id]} />
          <Link to={url + '/edit'}>Edit</Link>
          <CommentList comments={Object.values(comments)} />
        </div>
      );
    }
  }
}

function mapStateToProps (state) {
  return {
    posts: state.posts,
    comments: state.comments
  };
}

function mapDispatchToProps (dispatch) {
  return {
    receivePost: id => dispatch(receivePost(id)),
    receivePostComments: id => dispatch(receivePostComments(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
