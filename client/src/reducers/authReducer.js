const defaultState = {
    isAuthenicated: false,
    isAuthencaiting: false,
    currentUser: {},
    token: null,
    errors: []
}

export default function authReducer(state = defaultState, action) {
    switch (action.type) {

        case 'AUTHENTICATION_REQUEST':
        return {
            ...state,
            isAuthencaiting: false
        }

        case 'AUTHENTICATION_SUCCESS':
        debugger
            return {
                ...state,
                currentUser: action.user,
                token: action.token,
                isAuthenicated: true,  
                isAuthencaiting: false
            }

        case 'AUTHENTICATION_FAILURE':
            return {
                ...state,
                currentUser: {},
                isAuthenicated: false,  
                isAuthencaiting: false,
                token: null,
                errors: action.errors
            }
        
         case 'LOGOUT_USER':
            return { 
                 ...state,
                 currentUser: null,
                 isAuthenicated: false,
                 isAuthenicating: false,
                 token: null
             }     

        default:
            return state;
    }
} 
