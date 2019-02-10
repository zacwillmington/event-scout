const defaultState = {
    events: [],
    eventsHasErrors: false,
    eventsAreLoading: true,
    currentEvent: {}
}

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

        case 'ADDING_EVENT': 
            return {
                 ...state,
                 eventsAreLoading: true,
                 eventsHasErrors: false
            }
        
        case 'USERS_EVENTS_FETCH_SUCCESS':
            return {
                ...state,
                eventsAreLoading: false,
                usersEvents: action.usersEvents
            }

        case 'ADD_TO_USERS_EVENTS': 
            return {
                ...state,
                eventSuccess: true,
                currentEvent: action.eventData,
                usersEvents: [...state.usersEvents, action.usersEvents]
            }

        case 'REMOVE_EVENT': 
            return {
                ...state,
                usersEvents: state.usersEvents.filter( ({ id }) => id !== action.eventId)
            }

        default:
            return state;
    }
}
 