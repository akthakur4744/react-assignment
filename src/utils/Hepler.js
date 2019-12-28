import credentials from '../data/credentials';
import { user } from '../data/data';

export const LoginHelper = (userObj) => {
    let status = false;
    if (credentials.username === userObj.username && credentials.password === userObj.password) {
        status = true;
    }
    return status;
}

export const getEmployeeList = () => {
    return user;
}