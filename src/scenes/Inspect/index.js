import { connect } from 'react-redux';
import Inspect from './Inspect';
import { getThing } from '@store/actions/things';

const mapStateToProps = state => {
	return {
		thing: state.things.thingData,
	};
};

const mapActionsToProps = dispatch => {
	return {
		actions: {
			getThing(ID) {
				dispatch(getThing(ID));
			},
		},
	};
};

export default connect(mapStateToProps, mapActionsToProps)(Inspect);
