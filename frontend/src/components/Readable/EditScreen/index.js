import React, { Component } from 'react';
import { connect } from 'react-redux';
import { receiveCategories } from '../../../actions/category';
import { addPost, receivePost, updatePost } from '../../../actions/post';
import CategoryList from '../CategoryList';
import NotFoundScreen from '../NotFoundScreen';

class EditScreen extends Component {
  state = {};

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
          id
        }
      }
    } = nextProps;
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
      addPost({
        ...this.state,
        timestamp: Date.now()
      }).then(({post}) => history.push('/post/' + post.id));
    }
  };

  render () {
    const {
      categories,
      posts,
      match: {
        params: {
          category,
          id
        }
      }
    } = this.props;
    const post = id ? posts[id] : {};
    if ((!category || (categories && categories[category])) && (!id || (post && !post.deleted))) {
      const title = !id ? 'Add post' : post.title;
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
              defaultValue={post.title}
              onChange={this.onchange}
            />
          </div>
          <div className="post-edit-body">
            <textarea
              name="body"
              placeholder="Body"
              defaultValue={post.body}
              onChange={this.onchange}
            />
          </div>
          {!id && 
            <div className="post-edit-author">
              <input
                type="text"
                name="author"
                placeholder="Author"
                onChange={this.onchange}
              />
            </div>
          }
          {!id && 
            <CategoryList
              name="category"
              categories={Object.values(categories || {})}
              filterCategory={category || ''}
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
