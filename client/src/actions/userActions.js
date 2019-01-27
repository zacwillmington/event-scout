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

const deleteUserSuccess= user => {
    return {
        type: 'DELETE_USER',
        user: user
    }
}

export const editUser = user => {
    //Should I authenticate first?
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


esxport const deleteUser = user => {
    return dispatch => {
        dispatch(sendingUpdate(user))
        debugger
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
                debugger
                dispatch(userErrors(data.user, data.errors))
            }else {
                debugger
                dispatch(deleteUserSuccess(user))
            }
        })
    }
}


// Adds user to eventScout's Rails backend DB
// export const addCurrentUser = user => {
//     return (dispatch) => {
//         dispatch({ type: "SENDING_ADD_USER_REQUEST"})

//        return fetch('/api/v1/signin', {
//             method: 'POST',
//             headers: {
//                accept: 'application/json',
//                'Content-Type': 'application/json' 
//             },
//             body: JSON.stringify(user)
//         }).then(resp => resp.json()).then( data => {
//             if(data.errors) {
//                 const userErrors = {
//                     type: "USER_HAS_ERRORS",
//                     hasErrors: true,
//                     errors: data.errors
//                 }
//                 console.log(userErrors);
//                 dispatch(userErrors);
//             }else {
//                 const user = {
//                     type: "ADD_CURRENT_USER",
//                     user: data
//                       }
//                 dispatch(user);        
//             }
//         });
//     }
// }


