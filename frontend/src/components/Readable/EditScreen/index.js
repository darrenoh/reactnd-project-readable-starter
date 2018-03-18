import React, { Component } from 'react';
import { connect } from 'react-redux';
import { receiveCategories } from '../../../actions/category';
import { addPost, receivePost, updatePost } from '../../../actions/post';
import CategoryList from '../CategoryList';
import NotFoundScreen from '../NotFoundScreen';

class EditScreen extends Component {
  state = {
    title: '',
    body: '',
    author: '',
    category: ''
  };

  componentDidMount() {
    const {
      categories,
      receiveCategories,
    } = this.props;
    !categories && receiveCategories();
    this.componentWillReceiveProps(this.props);
  }

  componentWillReceiveProps(nextProps) {
    const {
      posts,
      receivePost,
      match: {
        params: {
          category,
          id
        }
      }
    } = nextProps;
    category && this.setState({category});
    if (id) {
      posts[id] ? this.setState(posts[id]) : receivePost(id)
        .then(({post}) => this.setState(post));
    }
  }

  onchange = ({target: {name, value}}) => {
    this.setState({[name]: value});
  };

  updatePost = e => {
    const {
      addPost,
      updatePost,
      history
    } = this.props;
    e.preventDefault();
    if (this.state.id) {
      updatePost(this.state).then(({post}) => history.push('/post/' + post.id));
    } else {
      addPost(this.state).then(({post}) => history.push('/post/' + post.id));
    }
  };

  render () {
    const {
      categories,
      match: {
        params: {
          category,
          id
        }
      }
    } = this.props;
    if ((!category || (categories && categories[category])) && (!id || (this.state.id && !this.state.deleted))) {
      const title = !id ? 'Add post' : 'Edit post';
      return (
        <form className="post-edit" onSubmit={this.updatePost}>
          <p className="App-intro">
            {title}
          </p>
          <div className="post-edit-title">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={this.state.title}
              onChange={this.onchange}
            />
          </div>
          <div className="post-edit-body">
            <textarea
              name="body"
              placeholder="Body"
              value={this.state.body}
              onChange={this.onchange}
            />
          </div>
          {!id && 
            <div className="post-edit-author">
              <input
                type="text"
                name="author"
                placeholder="Author"
                value={this.state.author}
                onChange={this.onchange}
              />
            </div>
          }
          {!id && 
            <CategoryList
              name="category"
              categories={Object.values(categories || {})}
              value={this.state.category}
              onChange={this.onchange}
            />
          }
          <button className="post-submit">
            Submit
          </button>
        </form>
      );
    } else {
      return (
        <NotFoundScreen />
      );
    }
  }
}

function mapStateToProps ({categories, posts}) {
  return {
    categories,
    posts
  };
}

function mapDispatchToProps (dispatch) {
  return {
    receiveCategories: () => dispatch(receiveCategories()),
    addPost: post => dispatch(addPost(post)),
    receivePost: id => dispatch(receivePost(id)),
    updatePost: post => dispatch(updatePost(post))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditScreen);
