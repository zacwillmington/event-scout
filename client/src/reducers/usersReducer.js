const defaultState = {
    user: {},
    errors: [],
    isLoading: false,
    isLoggedin: false
}

export default function usersReducer(state = defaultState, action) {
        switch (action.type) {


            case 'SENDING_USER_REQUEST':
                return { 
                    ...state,
                    currentUser: action.user,
                    isAuthenticated: true,
                    isLoading: true,
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
                    currentUser: null,
                    isAuthenticated: true,                    
                    errors: action.errors,
                    isLoading: false
                 }

            case 'DELETE_USER':
                return {
                    ...state,
                    currentUser: action.user,
                    isAuthenticated: false,                    
                    isLoading: false,
                    errors: []
                } 

            default:
                return state;
        }
    }
