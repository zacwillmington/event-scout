import { combineReducers } from "redux";    

const rootReducer = combineReducers({
    currentUser: usersReducer,
    events: eventsReducer
});

export default rootReducer;

function usersReducer(state = [], action) {
    // debugger
    switch (action.type) {
        case 'ADD_CURRENT_USER':
            console.log("adding user", action);
            return state;
    
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
