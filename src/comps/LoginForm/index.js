import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { authUser } from '@store/actions/users';

const mapStateToProps = state => {
  return {
    user: state.users.user,
    authenticated: state.users.authenticated
  };
};

const mapActionsToProps = dispatch => {
  return {
    actions: {
      login(user) {
        dispatch(
          authUser({
            username: user.name,
            password: user.password
          })
        );
      }
    }
  };
};

export default connect(mapStateToProps, mapActionsToProps)(LoginForm);
