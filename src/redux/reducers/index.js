import { combineReducers } from 'redux';
import courses from "./courseReducer";//courseReduser function we named here as course

const rootReducer = combineReducers({
    courses: courses  
});

export default rootReducer;