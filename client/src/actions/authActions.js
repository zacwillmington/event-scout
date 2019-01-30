// import fetch from 'isomorphic-fetch';

export const authRequest = () => {
    return {
        type: 'AUTHENTICATION_REQUEST'
    }
}

export const authSuccess = (user, token) => {
    return {
        type: 'AUTHENTICATION_SUCCESS',
        user: user,
        token: token
    }
}

export const authFailure = (errors) => {
    return {
        type: 'AUTHENTICATION_FAILURE',
        errors: errors
    }
}

const loadingAuthRequest = () => {
    return {
        type: 'LOADING_AUTH_REQUEST'
    }
}

const logoutSuccess = () => {
    return {
        type: 'LOGOUT_USER'
    }
}


export const authenticate = user => {
    return dispatch => {
        dispatch(authRequest());
        //Added this dispatch so that React object lifecycle method will can use prevProps to know whether to display error in signIn component.
        const userTokenUrl = 'http://localhost:3000/api/user_token';
        return fetch( userTokenUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, body: JSON.stringify({auth: user})
        })
        .then( resp => {
            // if (!resp.ok){
            //     const errorMsg =  {
            //         "User Name or Email": "Doesn't match our records"
            //         }
            //     dispatch(authFailure(errorMsg))
            //     localStorage.clear()
            // }
            // dispatch(loadingAuthRequest());
           return resp.json()
        })
        .then(response => {
            const token = response.jwt;
            localStorage.setItem('token', token);
            dispatch(getUser(user))
        }).catch( errors => {
          const errorMsg =  {
                "User Name or Email": "Doesn't match our records"
                }
            dispatch(authFailure(errorMsg))
            localStorage.clear()
        })
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
            dispatch(authSuccess(receivedUser, localStorage.getItem('token')));    
        })
    }
}

export const signupUser = user => {
    return dispatch => {
        dispatch(authRequest());
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
            debugger
            if(!userData.ok){
                dispatch(authFailure(userData.errors))
            }else {
                dispatch(authenticate({
                    email: userData.email,
                    password: userData.password
                }))
            }
        })
    }
}

export const logoutUser = user => {
    return dispatch => {
        return fetch('/api/v1/logout', {
            method:  'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then( resp =>resp.json())
        .then( response => {
            if (response.ok === true){
                localStorage.clear()
                dispatch(logoutSuccess());
            }
        })
        .catch(e => console.log(e));
    }
}

