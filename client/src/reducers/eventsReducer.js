
export default function eventsReducer(state = defaultState, action) {
    switch (action.type) {

        case 'EVENTS_HAS_ERRORS':
        console.log("event has errors");
            return { 
                ...state,
                eventsHasErrors: true,
                eventsAreLoading: false,
                errors: action.errors
            }

        case 'EVENTS_ARE_LOADING':
            return {
                ...state,
                eventsAreLoading: true,
                eventsHasErrors: false
            }

        case 'EVENTS_FETCH_DATA_SUCCESS':
            return {
                ...state,
                eventsAreLoading: false,
                eventsHasErrors: false,
                events: action.events.events
            }

        case 'ADDING_EVENT': 
            console.log('Adding event...');
            return {
                 ...state,
                 eventsAreLoading: true,
                 eventsHasErrors: false
            }

        case 'ADD_EVENT': 
            console.log('event added...');
            return {
                ...state
            }

        default:
            return state;
    }
}


const defaultState = {
    events: [],
    eventsHasErrors: false,
    eventsAreLoading: true
} 