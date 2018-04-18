import { LOGOUT } from '../../consts/users';

export default () => {
  return dispatch => {
    fetch('/logout', { credentials: 'include' }).then(response => {
      dispatch({
        type: LOGOUT
      });
    });
  };
};
