
export default function addCurrentUser(user) {
    return (dispatch) => {
        dispatch({ type: "SENDING_ADD_USER_REQUEST"})

       return fetch('/signin', {
            method: 'POST',
            headers: {
               accept: 'application/json',
               'Content-Type': 'application/json' 
            },
            body: JSON.stringify(user)
        }).then(resp => resp.json()).then( data => {
            if(data.errors) {
                const userErrors = {
                    type: "USER_HAS_ERRORS",
                    errors: data.errors
                }
                dispatch(userErrors);
            }else {
                const user = {
                    type: "ADD_CURRENT_USER",
                    user: data
                      }
                dispatch(user);        
            }
        });
    }
}
