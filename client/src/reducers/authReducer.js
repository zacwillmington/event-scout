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
        console.log("loading..")
            return {
                ...state,
                isLoading: true,
                hasErrors: false
            }

        case 'AUTHENTICATION_REQUEST':
        console.log("Authenticating");
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
                hasErrors: false
            }

        case 'AUTHENTICATION_FAILURE':
        
        console.log("auth fail")
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
        
         case 'LOGOUT_USER':
            return { 
                 ...state,
                 currentUser: {
                     id: ''
                 },
                 isAuthenticated: false,
                 isAuthenticating: false,
                 token: null
             }     

        default:
            return state;
    }
} 
