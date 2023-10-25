/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';
import authReducer from './authReducers';
import commonReducer from './commonReducer';
const rootReducer = combineReducers({
    auth: authReducer,
    common: commonReducer
});

export default rootReducer;