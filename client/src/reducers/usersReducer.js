
export default function usersReducer(state = [], action) {
        switch (action.type) {
            case 'ADD_CURRENT_USER':
                console.log("adding user", action);
             fetch('/signin', {
                    method: 'POST',
                    body: JSON.stringify(action.user),
                    headers: {
                    'Content-Type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then( user => {
                    debugger
                    this.props.addCurrentUser(user);
                    });
                        return state;
        
            default:
                return state;
        }
    }