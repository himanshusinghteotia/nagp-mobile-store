import { LOGIN_USER, LOGIN_FAILED } from './action-types/login-actions'

export const loginUser = (emailId, password) =>
    (dispatch, getState) => {
        fetch(`http://localhost:3000/user?emailId=${emailId}`)
            .then((res) => res.json())
            .then((data) => {
                dispatch({
                    type: LOGIN_USER,
                    user: data[0],
                    emailId: emailId,
                    password: password
                })
            })
            .catch((error) => {
                dispatch({
                    type: LOGIN_FAILED,
                    err: error,
                })
            })
    }

export default loginUser;