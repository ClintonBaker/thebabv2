import { PUSH_COMMENT } from '../../consts/things';

export default thing => {
  return dispatch => {
    fetch(`/thing/${thing.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(thing)
    }).then(response => {
      dispatch({
        type: PUSH_COMMENT
      });
    });
  };
};
