import React from 'react';
import { Button } from '@comps';
import './styles/CommentBox.css';

class CommentBox extends React.Component {
  state = {
    newComment: ''
  };

  updateInput = ({ target: { name, value } }) => {
    this.setState(state => {
      return {
        [name]: value
      };
    });
  };

  submit = () => {
    this.props.actions.pushComment({
      id: this.props.thing._id,
      comment: {
        author: {
          username: this.props.user,
          id: this.props.id
        },
        comment: this.state.newComment
      }
    });
    this.setState(state => {
      return {
        newComment: ''
      };
    });
  };

  render({ state } = this) {
    return (
      <div styleName="CommentBox">
        <textarea
          styleName="CommentArea"
          value={state.newComment}
          name="newComment"
          onChange={this.updateInput}
        />
        <div styleName="CommentButton">
          <Button onClick={this.submit}>Comment</Button>
        </div>
      </div>
    );
  }
}

export default CommentBox;
