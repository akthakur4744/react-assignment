import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer';

const configureStore = () =>{
	return createStore(reducer,applyMiddleware(thunk));
};

export default configureStore;