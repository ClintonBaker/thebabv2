import { POST_THING } from '../../consts/things';

export default form => {
  return dispatch => {
    fetch('/thing', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(json => {
        console.log(json);
        dispatch({
          type: POST_THING,
          data: json.id
        });
      });
  };
};
