
export default function usersReducer(state = defaultState, action) {
        switch (action.type) {
            case 'SENDING_REQUEST':
            console.log('The request is being sent...');
            return state;

            case 'ADD_CURRENT_USER':
                console.log("adding user...");
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