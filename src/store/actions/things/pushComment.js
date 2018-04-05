import { PUSH_COMMENT } from '../../consts/things';

export default (thing) => {
	return dispatch => {
		fetch(`http://rest.learncode.academy/api/thebab/things/${thing.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(thing),
		})
			.then(response => {
				dispatch({
					type: PUSH_COMMENT
				});
			})
	};
};
