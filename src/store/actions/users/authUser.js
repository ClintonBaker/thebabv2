import { AUTH_USER } from '../../consts/users';

export default (name, password) => {
  return dispatch => {
    fetch('http://rest.learncode.academy/api/thebab/users')
      .then(response => response.json())
      .then(users => {
        let user = users.filter(user => {
          return user.username === name;
        });
        user.length && user[0].password === password
          ? dispatch({
            type: AUTH_USER,
            user: user[0].username
          })
          : null
      });
  }
}