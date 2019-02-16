const defaultState = {
    isAuthenticated: false,
    isAuthenticating: false,
    isLoading: false,
    hasErrors: false,
    currentUser: {},
    token: null,
    errors: []
}

export default function authReducer(state = defaultState, action) {
    switch (action.type) {

        case 'LOADING_AUTH_REQUEST':
            return {
                ...state,
                isLoading: true,
                hasErrors: false
            }

        case 'AUTHENTICATION_REQUEST':
            return {
                ...state,
                isAuthenticating: true,
                isLoading: true
            }

        case 'AUTHENTICATION_SUCCESS':   
            return { 
                ...state,
                currentUser: action.user,
                token: action.token,
                isAuthenticated: true,  
                isAuthenticating: false,
                hasErrors: false,
                errors: []
            }

        case 'AUTHENTICATION_FAILURE':
            return {
                ...state,
                currentUser: {},
                isAuthenticated: false,  
                isAuthenticating: false,
                isLoading: false,
                token: null,
                hasErrors: true,
                errors: action.errors
            }
        
        default:
            return state;
    }
} 
