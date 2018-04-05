import { LOGOUT } from '../../consts/users';

export default () => {
  return dispatch => {
    dispatch({
      type: LOGOUT
    })
  }
}