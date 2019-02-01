function eventsHasErrored(errors) {
    return {
        type: 'EVENTS_HAS_ERRORS',
        eventsHasErrors: true,
        errors: errors
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

function addEventData(eventData){
    return {
        type: 'ADD_EVENT',
        event: eventData
    }
}

function addingEvent(){
    return {
        type: 'ADDING_EVENT'
    }
}

export const addEvent = eventData => {
    return dispatch => {
        dispatch(addingEvent());
        debugger
        // const url = `api/v1/users/${eventData.user_id}/events`;
        fetch(`/api/v1/users/${eventData.user_id}/events`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/js',
                'Accept': 'application/js',
            }, body: JSON.stringify(eventData)
        })
        .then(resp => resp.json())
        .then( eventData => {
            console.log(eventData);
        })
        .catch(e => console.log(e))   
    }

}

export const getEvents = searchTerm => {
    return (dispatch) => {
        dispatch(eventsAreLoading(true));
        const personalOAuthToken = "OOQWOVIVAWJOL4PMDYPZ";
        const anonymousAccessOAuthToken = "77ZSPVIUQPRNZ7ZLZN5O";
        const clientSecret = "SSAHW2YAGZCOKACZ2FLXMSVRKUQFEPFIUZY7YIRLVD2H4ANWNK";
         //fetch events from API eventBrite
        const eventbriteUrlSearch = `https://www.eventbriteapi.com/v3/events/search?q=${searchTerm}`;

        const homePageUrl = "http://localhost:3000/";

        const CORSProxyServerUrl = "https://cors-anywhere.herokuapp.com/";

        return fetch(CORSProxyServerUrl + eventbriteUrlSearch, {
            method: "GET",
            headers: {
                    "Authorization": `Bearer ${anonymousAccessOAuthToken}`,
                    "Origin": homePageUrl
                }
            }
        )
        .then( response => response.json())
        .then( eventsData => {
            dispatch(eventsFetchDataSuccess(eventsData));
        })
        .catch( error => dispatch(eventsHasErrored(error)));
    }
}

