
export default function eventsReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_EVENT':
            console.log("adding event", action);
            break;
    
        default:
            return state;
    }
}