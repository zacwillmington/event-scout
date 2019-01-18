import { combineReducers } from "redux";
import usersReducer from './usersReducer';
import eventsReducer from './eventsReducer'
import authReducer from './authReducer';    
    

const rootReducer = combineReducers({
    usersReducer,
    eventsReducer,
    authReducer
});

export default rootReducer;

