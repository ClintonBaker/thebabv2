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
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(thing => {
        dispatch({
          type: PUSH_COMMENT,
          data: thing
        });
      });
  };
};
