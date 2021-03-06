
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


export const authenticate = user => {
    return dispatch => {
        dispatch(authRequest());
        const userTokenUrl = 'http://localhost:3000/api/user_token';
        return fetch( userTokenUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, body: JSON.stringify({auth: user })
        })
        .then( resp => {
           return resp.json()
        })
        .then(response => {
            const token = response.jwt;
            localStorage.setItem('token', token);
            localStorage.setItem('user', user);
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
            if(!receivedUser.ok){
                dispatch(authFailure(receivedUser.errors));
            }else {
                dispatch(authSuccess(receivedUser.user, localStorage.getItem('token'))); 
            }   
        }).catch(e => dispatch(authFailure(e)))
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
            if(!userData.ok){
                dispatch(authFailure(userData.errors))
            }else {
                dispatch(authenticate(user))
            }
        }).catch(e => dispatch(authFailure(e)))
    }
}

export const logoutUser = user => {
    return dispatch => {
        return fetch('/api/v1/logout', {
            method:  'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, body: JSON.stringify(user)
        })
        .then( resp =>resp.json())
        .then( response => {
            if (response.ok === true){
                localStorage.clear()
                dispatch({type: 'RESET'});
            }
        }).catch(e => dispatch(authFailure(e)));
    }
}

