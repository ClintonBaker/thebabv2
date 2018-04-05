import { GET_THING } from '../../consts/things';

export default ID => {
	const THING_ENDPOINT = `http://rest.learncode.academy/api/thebab/things/${ID}`;
	return async dispatch => {
		const response = await fetch(THING_ENDPOINT);
		const thing = await response.json();
		dispatch({
			type: GET_THING,
			data: thing
		});
	};
};
