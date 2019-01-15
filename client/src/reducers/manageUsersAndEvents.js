import { combineReducers } from "redux";
import usersReducer from './usersReducer';
import eventsReducer from './eventsReducer';    

const rootReducer = combineReducers({
    usersReducer,
    eventsReducer
});

export default rootReducer;

