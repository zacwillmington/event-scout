function eventsHasErrored(bool) {
    return {
        type: 'EVENTS_HAS_ERRORS',
        hasErrored: bool
    };
}
function eventsAreLoading(bool) {
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
    return (dispatch) => {
        dispatch(eventsAreLoading(true));

         //fetch events from API eventBright
        return fetch('',{
            method: 'POST',
              
        })
        .then( response => response.json())
        .then( events => {
            console.log(events);
        })
        .catch( error => console.log(error))
        }
}

    export const getEvent = searchTerm => {
        debugger
        return { searchTerm }
        }
