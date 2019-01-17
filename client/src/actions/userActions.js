import { authFailure, authSuccess, authRequest } from "./authActions";

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

export const getUser = user => {
    return dispatch => {
        return fetch('/api/v1/find_user', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, body: JSON.stringify(user)
        })
        .then(resp => resp.json())
        .then( receivedUser => {
            dispatch(authSuccess(receivedUser, localStorage.getItem('token')))
        })
    }
}

export const signupUser = user => {
    const newUser = user;
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
           return dispatch(authenticate({
                    email: newUser.email,
                    password: newUser.password
                }))
        }).catch( errors => {
            dispatch(authFailure(errors));    
        })
    }
}

export const authenticate = user => {
    return dispatch => {
        dispatch(authRequest());
        const userTokenUrl = 'http://localhost:3000/api/user_token';
        return fetch( userTokenUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            },
             body: JSON.stringify({auth: user})
        })
        .then( resp => resp.json())
        .then(response => {
            const token = response.jwt;
            localStorage.setItem('token', token);
           return dispatch(getUser(user))
        }).catch( errors => {
            dispatch(authFailure(errors))
            localStorage.clear()
        })
    }
}