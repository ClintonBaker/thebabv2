import { LOGOUT } from '../../consts/users';

export default () => {
  return dispatch => {
    fetch('/logout').then(response => {
      dispatch({
        type: LOGOUT
      });
    });
  };
};
