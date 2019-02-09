function eventsHasErrored(errors) {
    return {
        type: 'EVENTS_HAS_ERRORS',
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
        events: events
    };
}

function addEventData(eventData){
    return {
        type: 'ADD_EVENT',
        eventData: eventData
    }
}

function addingEvent(){
    return {
        type: 'ADDING_EVENT'
    }
}

function getUsersEventsFromEventScout(events, user){
    return {
        type: 'USERS_EVENTS_FETCH_SUCCESS',
        usersEvents: events,
        user: user
    }
}

function preLoadingevents(events, cat){
    return {
        type: 'PRE_LOADING_EVENTS',
        events: events,
        cat: cat
    }
}

export const getEvents = (searchTerm, geoLocation) => {
    return dispatch => {
        dispatch(eventsAreLoading(true))
        const anonymousAccessOAuthToken = "77ZSPVIUQPRNZ7ZLZN5O";
        let eventbriteUrlSearch = `https://www.eventbriteapi.com/v3/events/search?q=${searchTerm}`;
         //Check if user's location has coordinates.
        if(Object.entries(geoLocation).length !== 0 && geoLocation.constructor === Object){
            const locationString = `location.latitude=${geoLocation.latitude}&location.longitude=${geoLocation.longitude}`
            
            eventbriteUrlSearch = `https://www.eventbriteapi.com/v3/events/search?q=${searchTerm}&${locationString}&expand=venue`;
        }

        // $search_url?token=$token&q=&date_created.keyword=today&page=$repeat&sort_by=$date&expand=venue

        const homePageUrl = "http://localhost:3000/";
        //Coors issue perhaps because I'm developing on two different ports e.g. 3000 frontend and 3001 on backend.
        const CORSProxyServerUrl = "https://cors-anywhere.herokuapp.com/";

        return fetch(CORSProxyServerUrl + eventbriteUrlSearch, {
            method: "GET",
            headers: {
                    "Authorization": `Bearer ${anonymousAccessOAuthToken}`,
                    "Origin": homePageUrl
                }
            }
        )
        .then(resp => resp.json())
        .then( events => {
                dispatch(eventsFetchDataSuccess(events))
            }
        )
    }
}

export const addEvent = eventData => {
    return dispatch => {
        dispatch(addingEvent());
        fetch(`/api/v1/users/${eventData.user_id}/events`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, body: JSON.stringify(eventData)
        })
        .then(resp => resp.json())
        .then( eventData => {
            if(!eventData.ok){
                dispatch(eventsHasErrored(eventData.errors))
            } else{
                dispatch(addEventData(eventData.eventData))
            }
        })
        .catch(e => console.log(e))   
    }

}

export const getUsersEvents = user => {
    return dispatch => {
        dispatch(eventsAreLoading(true));
        const url = `/api/v1/users/${user.id}/events`
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(eventData => {
            if(!eventData.ok) {
                dispatch(eventsHasErrored(eventData.errors))
            }else {
                dispatch(getUsersEventsFromEventScout(eventData.events, user))
            }
        })
    }
}

export const getEventsBySearchBar = (loc, searchTerm, eventDate) => {
    return (dispatch) => {
        dispatch(eventsAreLoading(true));
        const personalOAuthToken = "OOQWOVIVAWJOL4PMDYPZ";
        const anonymousAccessOAuthToken = "77ZSPVIUQPRNZ7ZLZN5O";
        const clientSecret = "SSAHW2YAGZCOKACZ2FLXMSVRKUQFEPFIUZY7YIRLVD2H4ANWNK";
        debugger
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

