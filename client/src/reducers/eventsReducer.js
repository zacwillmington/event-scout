
export default function eventsReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_EVENT':
            console.log("adding event", action);
            return state
        
        default:
            return state;
    }
}