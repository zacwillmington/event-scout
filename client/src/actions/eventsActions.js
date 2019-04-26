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
        type: 'ADD_TO_USERS_EVENTS',
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

const BASE_URL = 'http://event-scout.herokuapp.com/';
// const BASE_URL = 'http://localhost:3001/';

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
        const homePageUrl = BASE_URL;
        
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

export const addEvent = (eventData, userId) => {
    return dispatch => {
        dispatch(addingEvent());
        fetch(`${BASE_URL}api/v1/users/${userId}/events`, {
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
                dispatch(addEventData(eventData.data))
            }
        })
        .catch(e => dispatch(eventsHasErrored(e)))   
    }

}

export const getUsersEvents = user => {
    return dispatch => {
        dispatch(eventsAreLoading(true));
        const url = `${BASE_URL}api/v1/users/${user.id}/events`
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
        const anonymousAccessOAuthToken = "77ZSPVIUQPRNZ7ZLZN5O";         
        
        const eventbriteUrlSearch = `https://www.eventbriteapi.com/v3/events/search?q=${searchTerm}&location.address=${loc}&start_date.range_start=${eventDate}`;

        const homePageUrl = BASE_URL;

        const CORSProxyServerUrl = "https://cors-anywhere.herokuapp.com/";

        return fetch(CORSProxyServerUrl + eventbriteUrlSearch, {
            method: "GET",
            headers: {
                    "Authorization": 'Bearer 77ZSPVIUQPRNZ7ZLZN5O',
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

export const removeEvent = (eventData, userId) => {
    return dispatch => {
        const url = `${BASE_URL}api/v1/users/${userId}/events/${eventData.id}` 
        fetch(url,{
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then( data => {
            dispatch({ 
                type: 'REMOVE_EVENT',
                eventId: eventData.id
            })
        })
    }
}
