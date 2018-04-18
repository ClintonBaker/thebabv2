import { connect } from 'react-redux';

import Navbar from './Navbar';
import { logout, userIsAuth } from '@store/actions/users';

const mapStateToProps = state => {
  return {
    authenticated: state.users.authenticated,
    user: state.users.user
  };
};

const mapActionsToProps = dispatch => {
  return {
    actions: {
      logout() {
        dispatch(logout());
      },
      isAuth() {
        dispatch(userIsAuth());
      }
    }
  };
};

export default connect(mapStateToProps, mapActionsToProps)(Navbar);
