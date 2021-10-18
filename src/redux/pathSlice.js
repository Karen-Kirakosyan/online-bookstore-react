export function signPathReducer(state = {}, action) {
	if (action.type === 'edit-path') {
		return {
			path : action.payload.path
		};
	}
	return state;
}

export const initialSignPath = {
	path : ''
};

export function selectSignPath(state) {
	return state.signPath.path;
}

export function editSignPath(newPath) {
	return {
		type    : 'edit-path',
		payload : {
			path : newPath
		}
	};
}
