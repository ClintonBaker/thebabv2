import { AUTH_USER } from '../../consts/users';

export default user => {
  return dispatch => {
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(user)
    }).then(response => {
      if (response.ok) {
        dispatch({
          type: AUTH_USER,
          user: user.username,
          auth: true
        });
      } else {
        dispatch({
          type: AUTH_USER,
          user: user.username,
          auth: false
        });
      }
    });
  };
};
