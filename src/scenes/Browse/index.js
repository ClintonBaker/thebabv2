import Browse from './Browse';
import { connect } from 'react-redux';
import { getThing } from '@store/actions/things';

const mapStateToProps = state => {
	return {
		things: state.things.thingData,
	};
};

const mapActionsToProps = dispatch => {
	return {
		actions: {
			getThings() {
				dispatch(getThing(''));
			},
		},
	};
};

export default connect(mapStateToProps, mapActionsToProps)(Browse);
