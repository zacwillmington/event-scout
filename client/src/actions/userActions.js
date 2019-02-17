const editSuccess = user => {
    return {
        type: 'UPDATE_CURRENT_USER',
        user: user
    }
}

const userErrors = (user,errors) => {
    return {
        type: 'USER_HAS_ERRORS',
        user: user,
        errors: errors
    }
}

const sendingUpdate = user => {
    return {
        type: 'SENDING_USER_REQUEST',
        user: user
    }
}

const deleteUserSuccess = user => {
    return {
        type: 'DELETE_USER',
        user: user
    }
}


export const setUsersLocation = coords => {
    if(coords !== null){
        return dispatch => { dispatch({ type: 'SET_LOCATION', coords: coords})}
    }
}

export const editUser = user => {
    return dispatch => {
        dispatch(sendingUpdate(user));
        fetch(`/api/v1/users/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, body: JSON.stringify(user)
        })
        .then(res => {
            return res.json();
          })
          .then( userData => {
            if(!userData.ok) {
                dispatch(userErrors(userData.user, userData.errors))
            }else {
                dispatch(editSuccess(user));
            }
          })
    }
}


export const deleteUser = user => {
    return dispatch => {
        dispatch(sendingUpdate(user))
        fetch(`/api/v1/users/${user.id}`,{
            method: 'DELETE',
            headers: {
                'Accept': 'application/js',
                'Content-Type': 'application/js',
            }, body: JSON.stringify(user)
        })
        .then(resp => resp.json())
        .then(data => {
            if(!data.ok) {
                dispatch(userErrors(data.user, data.errors))
            }else {
                dispatch(deleteUserSuccess(user))
                localStorage.clear()
                dispatch({type: 'RESET'});
            }
        })
    }
}
