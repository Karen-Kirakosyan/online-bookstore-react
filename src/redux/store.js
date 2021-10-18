import { createStore, combineReducers } from 'redux';
import { signPathReducer, initialSignPath } from './pathSlice';
import { initialHasAccount, hasAccounthReducer } from './hasAccountSlice';

const store = createStore(
	combineReducers({
		signPath   : signPathReducer,
		hasAccount : hasAccounthReducer
	}),
	{
		currentUser : initialSignPath,
		hasAccount  : initialHasAccount
	}
);

export default store;
