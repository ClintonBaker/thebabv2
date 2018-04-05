import { connect } from 'react-redux';
import ThingForm from './ThingForm';
import { postThing } from '@store/actions/things';

const mapStateToProps = state => {
	return {
		FormPosted: state.things.FormPosted,
		ID: state.things.ID,
	};
};

const mapActionsToProps = dispatch => {
	return {
		actions: {
			postThing(form) {
				dispatch(postThing(form));
			},
		},
	};
};

export default connect(mapStateToProps, mapActionsToProps)(ThingForm);
