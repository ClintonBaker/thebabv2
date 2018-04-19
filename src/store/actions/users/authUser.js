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
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(json => {
        json.user
          ? dispatch({
              type: AUTH_USER,
              user: json.user.username,
              id: json.user._id,
              auth: true
            })
          : dispatch({
              type: AUTH_USER,
              user: 'Guest',
              id: null,
              auth: false
            });
      });
  };
};
