import { createStore, combineReducers } from 'redux';
import { initialHasAccount, hasAccounthReducer } from './hasAccountSlice';

const store = createStore(
	combineReducers({
		hasAccount : hasAccounthReducer
	}),
	{
		hasAccount : initialHasAccount
	}
);

export default store;
