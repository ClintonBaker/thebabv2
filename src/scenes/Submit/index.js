import { connect } from 'react-redux';
import Submit from './Submit';
import { postThing } from '@store/actions/things';
import { getUsers } from '@store/actions/users';

const mapStateToProps = state => {
	return {
		FormPosted: state.things.FormPosted,
		ID: state.things.ID,
	};
};

export default connect(mapStateToProps)(Submit);
