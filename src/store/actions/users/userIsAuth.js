import { USER_IS_AUTH } from '../../consts/users';

export default () => {
  return dispatch => {
    fetch('/user', { credentials: 'include' })
      .then(response => {
        if (response.ok) return response.json();
      })
      .then(json => {
        json.user
          ? dispatch({
              type: USER_IS_AUTH,
              user: json.user.username,
              id: json.user._id,
              auth: true
            })
          : dispatch({
              type: USER_IS_AUTH,
              user: 'Guest',
              id: null,
              auth: false
            });
      });
  };
};
