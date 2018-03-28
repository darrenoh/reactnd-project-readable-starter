import React, {Component} from 'react';
import {connect} from 'react-redux';
import {receivePostComments} from '../../../../actions/comment';
import Comment from './Comment';
import './index.css';

class CommentList extends Component{
  componentDidMount() {
    const {parentId, receivePostComments} = this.props;
    receivePostComments(parentId);
  }

  render () {
    const {parentId, comments} = this.props;
    return (
      <div className="comment-list">
        {comments[parentId] &&
          <ul>
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
