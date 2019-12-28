import * as actionTypes from '../actions/actionTypes';

const initialState = {
	user: false,
	userdata:null,
	errMessage:null
};

const reducer = (state = initialState, action) => {
	switch (action.type) {    
	case actionTypes.SET_USER:
		return {
			...state,
			user: action.user
		};
	case actionTypes.SET_EMPLOYEEDATA:
			return {
				...state,
				employeeData: action.employeeData
			};
	case actionTypes.SET_LOGIN_ERROR:
			return {
				...state,
				errMessage: action.errMessage
			};
	default:
		return state;
	}
};

export default reducer;
