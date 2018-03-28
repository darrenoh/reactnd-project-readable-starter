import React, {Component} from 'react';
import ListItem from './ListItem';

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
    const {history} = this.props;
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
            <ListItem history={history} post={post} key={post.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;
