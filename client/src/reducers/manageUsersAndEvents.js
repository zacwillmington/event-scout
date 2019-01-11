import { combineReducers } from "redux";    

const rootReducer = combineReducers({
    users: usersReducer,
    events: eventsReducer
});

export default rootReducer;

function usersReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_USER':
            console.log("adding user", action);
            break;
    
        default:
            return state;
    }
}

function eventsReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_EVENT':
            console.log("adding event", action);
            break;
    
        default:
            return state;
    }
}