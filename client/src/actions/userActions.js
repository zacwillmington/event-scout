const editSuccess = user => {
    return {
        type: 'UPDATE_CURRENT_USER',
        user: user
    }
}

const userErrors = errors => {
    return {
        type: 'USER_HAS_ERRORS',
        errors: errors
    }
}

export const editUser = user => {
    //Should I authenticate first?
    return dispatch => {
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
          .then( user => {
            if(!user.ok) {
                dispatch(userErrors(user.errors))
            }else {
                dispatch(editSuccess(user));
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


