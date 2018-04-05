import { combineReducers } from 'redux';
import users from './users';
import things from './things';

const reducers = combineReducers({
	users,
	things,
});

export default reducers;
