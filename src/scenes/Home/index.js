import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getThing } from '@store/actions/things';
import Home from './Home';

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
			removeThings(things) {
				things.forEach(thing => {
					fetch('http://rest.learncode.academy/api/thebab/things/' + thing.id, {
						method: 'DELETE'
					});
				});
			}
		}
	};
};

export default connect(mapStateToProps, mapActionsToProps)(Home);
