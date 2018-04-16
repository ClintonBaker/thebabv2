import { USER_IS_AUTH } from '../../consts/users';

export default () => {
  return dispatch => {
    fetch('/user')
      .then(response => {
        if (response.ok) return response.json();
      })
      .then(json => {
        console.log(json);
        dispatch({
          type: USER_IS_AUTH
        });
      });
  };
};
