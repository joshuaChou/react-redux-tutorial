import React, {Component} from 'react';

class LikeButton extends Component {
    constructor (props) {
      super(props);
      this.state = { isLiked: false }

      this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
      this.setState({
        isLiked: !this.state.isLiked
      })
    }

    render () {
      return (
        <button class='like-btn' onClick={this.handleClick}>
          <span class='like-text'>${this.state.isLiked ? '取消' : '点赞'}</span>
          <span>👍</span>
        </button>
      )
    }
  }

export default LikeButton;