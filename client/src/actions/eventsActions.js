function eventsHasErrored(bool) {
    return {
        type: 'EVENTS_HAS_ERRORS',
        eventsHasErrors: bool
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
        const personalOAuthToken = "OOQWOVIVAWJOL4PMDYPZ";
        const anonymousAccessOAuthToken = "77ZSPVIUQPRNZ7ZLZN5O";
        const clientSecret = "SSAHW2YAGZCOKACZ2FLXMSVRKUQFEPFIUZY7YIRLVD2H4ANWNK";
         //fetch events from API eventBright
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

    export const getEvent = searchTerm => {
        debugger
        return { searchTerm }
        }
