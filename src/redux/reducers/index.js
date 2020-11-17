import { combineReducers } from 'redux';
import courses from "./courseReducer";//courseReduser function we named here as course
import authors from './authorReducer';

const rootReducer = combineReducers({
    courses: courses,
    authors: authors  
});

export default rootReducer;