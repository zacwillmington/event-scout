
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

