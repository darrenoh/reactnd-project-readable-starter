import React, {Component} from 'react';
import {connect} from 'react-redux';
import {receiveCategories} from '../../actions/category';
import {addPost, receivePost, updatePost} from '../../actions/post';
import NotFoundScreen from './NotFoundScreen';

class EditScreen extends Component {
  state = {
    title: '',
    body: '',
    author: '',
    category: ''
  };

  componentDidMount() {
    console.log(this.props);
    const {
      categories,
      receiveCategories,
      match: {
        params: {
          category,
          id
        }
      }
    } = this.props;
    !categories && receiveCategories().then(() => {
      category && this.setState({category});
    });
    this.loadPost(category, id);
  }

  componentWillReceiveProps(nextProps) {
    const {
      match: {
        params: {
          category,
          id
        }
      }
    } = nextProps;
    id !== this.props.match.params.id && this.loadPost(category, id);
  }

  loadPost = (category, id) => {
    const {posts, receivePost} = this.props;
    if (id) {
      posts[id] ? this.setState(posts[id]) : receivePost(id)
        .then(({post}) => this.setState(post));
    } else {
      this.setState({
        id: null,
        title: '',
        body: '',
        author: '',
        category: category || '',
        deleted: null
      });
    }
  };

  onchange = ({target: {name, value}}) => {
    this.setState({[name]: value});
  };

  updatePost = e => {
    const {
      addPost,
      updatePost,
      history
    } = this.props;
    const category = this.state.category || 'post';
    e.preventDefault();
    if (this.state.id) {
      updatePost(this.state).then(({post}) => history.push('/' + category + '/' + post.id));
    } else {
      addPost(this.state).then(({post}) => history.push('/' + category + '/' + post.id));
    }
  };

  render () {
    const {
      categories,
      history,
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
        <main className="readable-body">
          <p className="App-intro">
            {title}
          </p>
          <form className="post-edit" onSubmit={this.updatePost}>
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
              <select
                name="category"
                className="category-list"
                value={this.state.category}
                onChange={this.onchange}
              >
                <option value="" disabled>Category</option>
                {Object.values(categories || {}).map(category => (
                  <option key={category.path} value={category.path}>
                    {category.name}
                  </option>
                ))}
              </select>
            }
            <button className="post-submit">
              Submit
            </button>
          </form>
        </main>
      );
    } else {
      return (
        <NotFoundScreen history={history} />
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
