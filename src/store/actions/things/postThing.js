import { POST_THING } from '../../consts/things';

export default form => {
	return dispatch => {
		fetch('http://rest.learncode.academy/api/thebab/things', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(form),
		})
			.then(response => {
				if (response.ok) {
					return response.json();
				}
				throw new Error('Things went wrong');
			})
			.then(json => {
				dispatch({
					type: POST_THING,
					data: json.id,
				});
			})
			.catch(error => {
				console.log('We had some issues...');
			});
	};
};
