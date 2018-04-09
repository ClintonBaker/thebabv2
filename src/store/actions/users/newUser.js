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
        throw new Error('Things went wrong');
      })
      .then(json => {
        dispatch({
          type: NEW_USER,
          data: json.username
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};
