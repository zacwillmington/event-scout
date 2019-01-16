import { authFailure } from "./authActions";

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

export const signupUser = user => {
    return dispatch => {
        return fetch('/api/v1/signup', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: user })
        })
        .then( resp => resp.json())
        .then( userData => {
            console.log(userData);
            // dispatch(authenticate({
            //         name: userData.user_name,
            //         email: userData.email,
            //         password: userData.password_digest
            //     })
            // )
        }).catch( errors => {
            dispatch(authFailure(errors));    
        })
    }
}