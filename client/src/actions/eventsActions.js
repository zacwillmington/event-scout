function eventsHasErrored(bool) {
    return {
        type: 'EVENTS_HAS_ERRORED',
        hasErrored: bool
    };
}
function eventsIsLoading(bool) {
    return {
        type: 'EVENTS_IS_LOADING',
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
    return { searchTerm }
}

export const getEvent = searchTerm => {
    return { searchTerm }
}
