const defaultState = {
    isAuthenticated: false,
    isAuthenticating: false,
    currentUser: {},
    token: null,
    errors: []
}

export default function authReducer(state = defaultState, action) {
    switch (action.type) {

        case 'AUTHENTICATION_REQUEST':
        return {
            ...state,
            isAuthenticating: true
        }

        case 'AUTHENTICATION_SUCCESS':    
            return {
                ...state,
                currentUser: action.user,
                token: action.token,
                isAuthenticated: true,  
                isAuthenticating: false
            }

        case 'AUTHENTICATION_FAILURE':
            return {
                ...state,
                currentUser: {},
                isAuthenticated: false,  
                isAuthenticating: false,
                token: null,
                errors: action.errors
            }
        
         case 'LOGOUT_USER':
            return { 
                 ...state,
                 currentUser: null,
                 isAuthenticated: false,
                 isAuthenticating: false,
                 token: null
             }     

        default:
            return state;
    }
} 
