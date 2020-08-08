import { combineReducers } from 'redux';
import employees from './employees_reducer';
import user from './user_reducer';

const rootReducer = combineReducers({
    employees,
    user
});

export default rootReducer;
