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

const logoutSuccess = () => {
    return {
        type: 'LOGOUT_USER'
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
            dispatch(getUser(user))
        }).catch( errors => {
            dispatch(authFailure(errors))
            localStorage.clear()
        })
    }
}

export const signupUser = user => {
    const newUser = user;
    debugger
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
           dispatch(authenticate({
                    email: userData.email,
                    password: userData.password
                }))
        }).catch( errors => {
            dispatch(authFailure(errors));    
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

