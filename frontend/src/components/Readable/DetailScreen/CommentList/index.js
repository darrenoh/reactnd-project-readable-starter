/**
 * @file
 * Comment list component for post detail view.
 *
 * Components:
 * - Comment
 * - Add
 * - Form
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import Modal from 'react-modal';
import {receivePostComments} from '../../../../actions/comment';
import Comment from './Comment';
import Form from './Form';

class CommentList extends Component{
  state = {addModalOpen: false};

  componentDidMount() {
    const {parentId, receivePostComments} = this.props;
    receivePostComments(parentId);
  }

  openAddModal = () => {
    this.setState(() => ({addModalOpen: true}));
  };

  closeAddModal = () => {
    this.setState(() => ({addModalOpen: false}));
  };

  render () {
    const {addModalOpen} = this.state;
    const {parentId, comments} = this.props;
    return (
      <div>
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
          {addModalOpen && <Form comment={{parentId}} closeForm={this.closeAddModal} />}
        </Modal>
        {comments[parentId] &&
          <ul className="comment-list">
            {Object.values(comments[parentId]).filter(comment => !comment.deleted).map(comment => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </ul>
        }
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {comments: state.comments};
}

function mapDispatchToProps (dispatch) {
  return {receivePostComments: id => dispatch(receivePostComments(id))};
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
