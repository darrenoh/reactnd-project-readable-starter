import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {voteUpPost, voteDownPost, deletePost} from '../../../../actions/post';

class ListItem extends Component {
  voteUpPost = () => {
    this.props.voteUpPost(this.props.post.id);
  };

  voteDownPost = () => {
    this.props.voteDownPost(this.props.post.id);
  };

  deletePost = () => {
    const {deletePost, post, history} = this.props;
    deletePost(post.id);
    history.push('/');
  };

  render () {
    const {history, post} = this.props;
    const category = post.category || 'post';
    const timestamp = new Date(post.timestamp);
    return (
      <li className="post-list-item">
        <Link className="post-title" to={'/' + category + '/' + post.id}>{post.title}</Link>
        <div className="post-meta">
          <div className="post-author">{post.author}</div>
          <div className="post-timestamp">{timestamp.toLocaleString()}</div>
          <div className="post-comment-count">{post.commentCount}</div>
        </div>
        <div className="post-controls">
          <button className="post-edit" onClick={() => history.push('/' + category + '/' + post.id + '/edit')}>
            Edit
          </button>
          <button className="post-delete" onClick={this.deletePost}>
            Delete
          </button>
        </div>
        <div className="post-score">
          <span className="post-votescore">{post.voteScore}</span>
          <button className="post-vote-up" onClick={this.voteUpPost}>
            Vote up
          </button>
          <button className="post-vote-down" onClick={this.voteDownPost}>
            Vote down
          </button>
        </div>
      </li>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    voteUpPost: id => dispatch(voteUpPost(id)),
    voteDownPost: id => dispatch(voteDownPost(id)),
    deletePost: id => dispatch(deletePost(id))
  };
}

export default connect(null, mapDispatchToProps)(ListItem);
