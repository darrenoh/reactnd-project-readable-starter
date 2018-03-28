import React, {Component} from 'react';
import {connect} from 'react-redux';
import Modal from 'react-modal';
import {
  voteUpComment,
  voteDownComment,
  deleteComment
} from '../../../../actions/comment';
import Form from '../Form';
import './Comment.css';

class Comment extends Component {
  state = {editModalOpen: false};

  openEditModal = () => {
    this.setState(() => ({editModalOpen: true}));
  };

  closeEditModal = () => {
    this.setState(() => ({editModalOpen: false}));
  };

  voteUpComment = () => {
    const {comment, voteUpComment} = this.props;
    voteUpComment(comment.id);
  };

  voteDownComment = () => {
    const {comment, voteDownComment} = this.props;
    voteDownComment(comment.id);
  };

  deleteComment = () => {
    const {comment, deleteComment} = this.props;
    deleteComment(comment.id);
  };

  render () {
    const {editModalOpen} = this.state;
    const {comment} = this.props;
    const timestamp = new Date(comment.timestamp);
    return (
      <li className="comment-list-item">
        <div className="comment-body">{comment.body}</div>
        <div className="comment-meta">
          <div className="comment-author">{comment.author}</div>
          <div className="comment-timestamp">{timestamp.toLocaleString()}</div>
        </div>
        <div className="comment-score">
          <span className="comment-votescore">{comment.voteScore}</span>
          <button className="comment-vote-up" onClick={this.voteUpComment}>
            Vote up
          </button>
          <button className="comment-vote-down" onClick={this.voteDownComment}>
            Vote down
          </button>
        </div>
        <div className="comment-controls">
          <button className="comment-edit" onClick={this.openEditModal}>
            Edit
          </button>
          <Modal
            className="modal"
            overlayClassName="overlay"
            isOpen={editModalOpen}
            onRequestClose={this.closeEditModal}
            contentLabel="Modal"
          >
            {editModalOpen && <Form comment={comment} closeForm={this.closeEditModal} />}
          </Modal>
          <button className="comment-delete" onClick={this.deleteComment}>
            Delete
          </button>
        </div>
      </li>
    );
  }
}

function mapStateToProps (state) {
  return {comments: state.comments};
}

function mapDispatchToProps (dispatch) {
  return {
    voteUpComment: id => dispatch(voteUpComment(id)),
    voteDownComment: id => dispatch(voteDownComment(id)),
    deleteComment: id => dispatch(deleteComment(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
