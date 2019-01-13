import { combineReducers } from "redux";
import usersReducer from './usersReducer';
import eventsReducer from './eventsReducer';    

const rootReducer = combineReducers({
    currentUser: usersReducer,
    events: eventsReducer
});

export default rootReducer;

