
export default function eventsReducer(state = defaultState, action) {
    switch (action.type) {
        case 'EVENTS_HAS_ERRORS':
            console.log("Error retreviving event", action);
            return state

        case 'EVENTS_ARE_LOADING':
            console.log('events are loading..');
            return state;

        case 'EVENTS_FETCH_DATA_SUCCESS':
            console.log('events fetched success..', action);
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