
export default function eventsReducer(state = defaultState, action) {
    switch (action.type) {
        case 'EVENTS_HAS_ERRORS':
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

        default:
            return state;
    }
}


const defaultState = {
    events: [],
    eventsHasErrors: false,
    eventsAreLoading: true
} 