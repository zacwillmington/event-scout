    

// Adds user to eventScout's Rails backend DB
export const addCurrentUser = user => {
    return (dispatch) => {
        dispatch({ type: "SENDING_ADD_USER_REQUEST"})

       return fetch('/api/v1/signin', {
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
                    hasErrors: true,
                    errors: data.errors
                }
                console.log(userErrors);
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

export const editUser = user => {
    return dispatch => {
        fetch(`api/v1/users/${user.id}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(updatedUser => {
            console.log(updatedUser);
        })
        .catch(e => console.log(e))
    }
}


