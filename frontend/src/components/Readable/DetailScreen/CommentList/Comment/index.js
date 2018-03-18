/**
 * @file
 * Comment component for the comment list component.
 *
 * Details
 * - Date and time
 * - Author
 * - Body
 *
 * Components
 * - Edit
 * - Delete
 * - Score
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteComment} from '../../../../../actions/comment';
import Modal from 'react-modal';
import Form from '../Form';

class Comment extends Component {
  state = {editModalOpen: false};

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openEditModal = () => {
    this.setState(() => ({editModalOpen: true}));
  };

  closeEditModal = () => {
    this.setState(() => ({editModalOpen: false}));
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
          <div className="post-votescore">{comment.voteScore}</div>
        </div>
        <button className="comment-edit-button" onClick={this.openEditModal}>
          Edit
        </button>
        <button className="comment-delete-button" onClick={this.deleteComment}>
          Delete
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
      </li>
    );
  }
}

function mapStateToProps (state) {
  return {comments: state.comments};
}

function mapDispatchToProps (dispatch) {
  return {deleteComment: id => dispatch(deleteComment(id))};
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
