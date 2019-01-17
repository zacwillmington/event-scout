function eventsHasErrored(bool) {
    return {
        type: 'EVENTS_HAS_ERRORS',
        hasErrored: bool
    };
}
function eventsIsLoading(bool) {
    return {
        type: 'EVENTS_ARE_LOADING',
        isLoading: bool
    };
}
function eventsFetchDataSuccess(events) {
    return {
        type: 'EVENTS_FETCH_DATA_SUCCESS',
        events
    };
}


export const getEvents = searchTerm => {
    debugger    
    return { searchTerm }
}

export const getEvent = searchTerm => {
    debugger
    return { searchTerm }
}
