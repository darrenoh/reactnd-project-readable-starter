import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addComment, receiveComment, updateComment} from '../../../actions/comment';

class Form extends Component {
  state = {
    body: '',
    author: ''
  };

  componentDidMount() {
    this.setState(this.props.comment);
  }

  onchange = ({target: {name, value}}) => {
    this.setState({[name]: value});
  };

  updateComment = e => {
    const {addComment, updateComment, closeForm} = this.props;
    e.preventDefault();
    if (this.state.id) {
      updateComment(this.state).then(() => closeForm());
    } else {
      addComment(this.state).then(() => closeForm());
    }
  };

  render () {
    const comment = this.props.comment || {};
    return (
      <form className="comment-edit" onSubmit={this.updateComment}>
        <p>{comment.id ? 'Edit comment' : 'Add comment'}</p>
        <div className="comment-edit-body">
          <textarea
            name="body"
            placeholder="Body"
            value={this.state.body}
            onChange={this.onchange}
          />
        </div>
        {!comment.id && 
          <div className="comment-edit-author">
            <input
              type="text"
              name="author"
              placeholder="Author"
              value={this.state.author}
              onChange={this.onchange}
            />
          </div>
        }
        <button className="comment-submit">
          Submit
        </button>
      </form>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addComment: comment => dispatch(addComment(comment)),
    receiveComment: id => dispatch(receiveComment(id)),
    updateComment: comment => dispatch(updateComment(comment))
  };
}

export default connect(null, mapDispatchToProps)(Form);
