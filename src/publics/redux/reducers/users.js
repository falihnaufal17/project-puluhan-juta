let initialState = {
    isLoading: true,
    isLogoutLoading: true,
    data: {},
    token: null,
    isSignOut: false
}
const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RESTORE_TOKEN':
            return {
                ...state,
                isLoading: false,
                token: action.token
            }
        case 'LOGIN_PENDING':
            return {
                ...state,
                isLoading: true,
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isLoading: false,
                data: action.payload.result,
                token: action.token
            }
        case 'LOGOUT_PENDING':
            return {
                ...state,
                isLogoutLoading: true,
            }
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                isLogoutLoading: false,
                data: action.payload.result,
                isSignOut: true,
                token: null
            }
        default:
            return initialState
    }
}

export default UsersReducer;