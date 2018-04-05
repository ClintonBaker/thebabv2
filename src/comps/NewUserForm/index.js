import { connect } from 'react-redux';
import NewUserForm from './NewUserForm';
import { newUser } from '@store/actions/users';

const mapActionsToProps = dispatch => {
	return {
		actions: {
			newUser(user) {
				dispatch(newUser(user))
			},
		},
	};
};

export default connect(null, mapActionsToProps)(NewUserForm);
