
export default function eventsReducer(state = defaultState, action) {
    switch (action.type) {
        case 'EVENTS_HAS_ERRORS':
            return state

        case 'EVENTS_ARE_LOADING':
            return state;

        case 'EVENTS_FETCH_DATA_SUCCESS':
            
            return state;

        default:
            return state;
    }
}


const defaultState = {
    events: [],
    eventsHasErrors: false,
    eventsAreLoading: true
} 