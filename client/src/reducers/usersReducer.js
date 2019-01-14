
export default function usersReducer(state = defaultState, action) {
        switch (action.type) {
            case 'SENDING_ADD_USER_REQUEST':
            console.log('Add user request is being sent...');
            return state;

            case 'ADD_CURRENT_USER':
                console.log("adding user...");
                return state;
       
            case 'USER_HAS_ERRORS':
                console.log("User has errors...", action.userErrors);
                return state;
            default:
                return state;
        }
    }

    const defaultState = {
        id: null,
        userName: null,
        email: null,
        errors: [],
        requestPending: false
    }