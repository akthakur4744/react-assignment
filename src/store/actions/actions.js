import * as actionTypes from './actionTypes';
import { LoginHelper , getEmployeeList} from '../../utils/Hepler';

export const setUser = (user) => {
	return {
		type: actionTypes.SET_USER,
		user: user
	};
};
export const getEmployeeData = (employeeData) => {
	return {
		type: actionTypes.SET_EMPLOYEEDATA,
		employeeData: employeeData
	};
};
export const setLoginError = (errMessage) => {
	return {
		type: actionTypes.SET_LOGIN_ERROR,
		errMessage: errMessage
	};
};
export const Login = (userData) => (dispatch) => {
	let loginStatus = LoginHelper(userData);
	if(loginStatus){
		dispatch(setUser(userData.username));
	}else{
		dispatch(setLoginError('Invalid Username/Password'));
	}	
};

export const fetchEmployeeList = () => (dispatch) => {
	const employeeList = getEmployeeList();
	dispatch(getEmployeeData(employeeList));

}