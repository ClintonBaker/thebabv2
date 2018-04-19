import { connect } from 'react-redux';
import CommentBox from './CommentBox';
import { pushComment } from '@store/actions/things';

const mapStateToProps = state => {
  return {
    user: state.users.user,
    id: state.users.ID
  };
};

const mapActionsToProps = dispatch => {
  return {
    actions: {
      pushComment(comment, id) {
        dispatch(pushComment(comment, id));
      }
    }
  };
};

export default connect(mapStateToProps, mapActionsToProps)(CommentBox);
