import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PostList extends Component {
  state = {sort: 'date'};

  compare = type => {
    switch (type) {
      case 'score':
        return (a, b) => b.voteScore - a.voteScore;
      default:
        return (a, b) => b.timestamp - a.timestamp;
    }
  };

  render () {
    let posts = this.props.posts.filter(post => !post.deleted);
    posts.sort(this.compare(this.state.sort));
    return (
      <div>
        <select className="post-sort" onChange={({target: {value}}) => this.setState({sort: value})}>
          <option value="" disabled>Sort by:</option>
          <option value="date">Date</option>
          <option value="score">Vote score</option>
        </select>
        <ul className="post-list">
          {posts.map(post => (
            <li className="post-list-item" key={post.id}>
              <Link to={'/post/' + post.id}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;
