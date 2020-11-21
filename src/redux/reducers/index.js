import { combineReducers } from 'redux';
import courses from "./courseReducer";//courseReduser function we named here as course
import authors from './authorReducer';
import apiCallsInProgress from './apiStatusReducer';

const rootReducer = combineReducers({
    courses: courses,
    authors: authors,
    apiCallsInProgress 
});

export default rootReducer;