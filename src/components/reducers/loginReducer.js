import { LOGIN_USER } from "../actions/action-types/login-actions"

const LOGIN_INITIAL_STATE = {
    isLoggedIn: false,
    user: {},
    loginErrMsg: ''
}

const loginReducer = (state = LOGIN_INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
            if (action.user.password === action.password) {
                console.log("Logged in")
                return {
                    ...state,
                    user: action.user,
                    isLoggedIn: true,
                }
            } else {
                console.log("Wrong Password")
                return {
                    ...state,
                    loginErrMsg: 'Wrong credentials. Please try again.'
                }
            }
        default:
            return state
    }
}

export default loginReducer;