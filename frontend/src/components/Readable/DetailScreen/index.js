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
import { fetchPost } from '../../../actions/post';
import { fetchPostComments } from '../../../actions/comment';
import NotFoundScreen from '../NotFoundScreen';
import PostDetail from './PostDetail';
import CommentList from './CommentList';

class DetailScreen extends Component {
  componentDidMount() {
    const {
      fetchPost,
      fetchPostComments,
      match: {
        params: {
          id
        }
      }
    } = this.props;
    fetchPost(id);
    fetchPostComments(id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      const {
        fetchPost,
        fetchPostComments,
        match: {
          params: {
            id
          }
        }
      } = nextProps;
      fetchPost(id);
      fetchPostComments(id);
    }
  }

  render () {
    const {
      posts,
      match: {
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
    fetchPost: id => dispatch(fetchPost(id)),
    fetchPostComments: id => dispatch(fetchPostComments(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
