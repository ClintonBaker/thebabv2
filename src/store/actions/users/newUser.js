import { NEW_USER } from '../../consts/users';

export default user => {
  return dispatch => {
    fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(response => {
      if (response.ok) {
        dispatch({
          type: NEW_USER,
          data: user.username
        });
      }
    });
  };
};
