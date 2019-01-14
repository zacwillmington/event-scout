
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
                    userErrors: data.errors
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






// export const signupCoffeeShop = data => {
//     return dispatch => {
//       dispatch({ type: "SENDING_COFFEE_SHOP_REQUEST" });
//       return fetch(`/api/v1/coffee_shops`, {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       }).then(resp => resp.json())
//         .then(json => {
//           if (json.coffee_shop) {
//             // Update redux store with return data
//             dispatch(addCoffeeShop(json.coffee_shop));
//           } else {
//             dispatch({ type: "ADD_COFFEE_SHOP_ERRORS", errors: json.errors });
//           }
//         });
//     }
//   }
  