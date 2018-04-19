import { NEW_USER } from '../../consts/users';

export default user => {
  return dispatch => {
    fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(json => {
        console.log(json);
        dispatch({
          type: NEW_USER,
          user: json.user.username,
          id: json.user._id
        });
      });
  };
};
