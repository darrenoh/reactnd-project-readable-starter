import React, {Component} from 'react';
import {connect} from 'react-redux';
import Modal from 'react-modal';
import {voteUpPost, voteDownPost, deletePost} from '../../../actions/post';
import Form from './Form';
import './PostDetail.css';

class PostDetail extends Component {
  state = {addModalOpen: false};

  openAddModal = () => {
    this.setState(() => ({addModalOpen: true}));
  };

  closeAddModal = () => {
    this.setState(() => ({addModalOpen: false}));
  };

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
    const {addModalOpen} = this.state;
    const {post, url, history} = this.props;
    const timestamp = new Date(post.timestamp);
    return (
      <div className="post-detail">
        <div className="post-body">{post.body}</div>
        <div className="post-meta">
          <div className="post-author">{post.author}</div>
          <div className="post-timestamp">{timestamp.toLocaleString()}</div>
          <div className="post-comment-count">{post.commentCount}</div>
          <button className="comment-add-button" onClick={this.openAddModal}>
            Add comment
          </button>
          <Modal
            className="modal"
            overlayClassName="overlay"
            isOpen={addModalOpen}
            onRequestClose={this.closeAddModal}
            contentLabel="Modal"
          >
            {addModalOpen && <Form comment={{parentId: post.id}} closeForm={this.closeAddModal} />}
          </Modal>
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
        <div className="post-controls">
          <button className="post-edit" onClick={() => history.push(url + '/edit')}>
            Edit
          </button>
          <button className="post-delete" onClick={this.deletePost}>
            Delete
          </button>
        </div>
      </div>
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

export default connect(null, mapDispatchToProps)(PostDetail);
