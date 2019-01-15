
export default function usersReducer(state = defaultState, action) {
        switch (action.type) {
            case 'SENDING_ADD_USER_REQUEST':
                return { 
                    currentUser: null,
                    isLoggedin: false,  
                    isLoading: true,
                    hasErrors: false
                 }

            case 'ADD_CURRENT_USER':
                return { 
                    currentUser: action.user,
                    isLoggedin: true,  
                    isLoading: false,
                    hasErrors: false
                 }
       
            case 'USER_HAS_ERRORS':
                return { 
                    currentUser: null,
                    isLoggedin: false,
                    hasErrors: true,
                    errors: action.errors,
                    isLoading: false
                 }
            default:
                return state;
        }
    }

    const defaultState = {
        currentUser: {
            id: null,
            userName: null,
            email: null
        },
        errors: [],
        isLoading: true
    }