const defaultState = {
    user: {},
    errors: [],
    hasErrors: false,
    isLoading: false,
    isLoggedin: false,
    locationSet: false,
    usersLocation: {}
}

export default function usersReducer(state = defaultState, action) {
        switch (action.type) {
            case 'SET_LOCATION':
            return {
                ...state,
                usersLocation: action.coords,
                locationSet: true
            }

            case 'SENDING_USER_REQUEST':
                return { 
                    ...state,
                    currentUser: action.user,
                    isAuthenticated: true,
                    isLoading: true,
                    hasErrors: false,
                    errors: []
                 }

            case 'UPDATE_CURRENT_USER':
                return { 
                    ...state,
                    currentUser: action.user,
                    isAuthenticated: true,
                    isLoading: false,
                    errors: []
                 }
       
            case 'USER_HAS_ERRORS':
                return { 
                    ...state,
                    currentUser: action.user,
                    isAuthenticated: true,  
                    errors: action.errors,
                    isLoading: false,
                    hasErrors: true
                 }

            case 'DELETE_USER':
                return {
                    ...state,
                    currentUser: {},
                    isAuthenticated: false, 
                    isLoading: false,
                    errors: []
                } 

            default:
                return state;
        }
    }
