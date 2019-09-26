import React, { Component } from 'react';
import { connect } from 'react-redux';//react ile redux'ı bağlıcak
import { fetchPostList, fetchUserList } from '../actions';

class PostList extends Component {

  constructor(props) {
    super(props);

    this.findUserName = this.findUserName.bind(this);
  }

  //yaşam döngüsü fonksiyonu
  componentDidMount() {
    this.props.fetchPostList();
    this.props.fetchUserList();
  }

  findUserName(userId) {
    const { userList } = this.props;
    if (userList.length > 0) {
      return userList.find(user => user.id === userId).name;
    } else {
      return '';
    }
  }

  renderItem(post) {
    return (
      <div className='item' key={post.id}>
        <i className="right triangle icon"></i>
        <div className="content">
          <div className="header">{post.title}</div>
          <div className="description">{post.body}</div>
          <div className="header">{this.findUserName(post.userId)}</div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className='ui list'>
        {this.props.postList.map(post => this.renderItem(post))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    postList: state.postList,
    userList: state.userList
  }
};

export default connect(mapStateToProps, { fetchPostList, fetchUserList })(PostList);
