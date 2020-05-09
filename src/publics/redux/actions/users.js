import axios from 'axios';
const url = 'https://api-coffee-chat.herokuapp.com';
import { AsyncStorage } from 'react-native'

export const login = (data) => {
    return (dispatch) => {
        dispatch({
            type: 'LOGIN_PENDING'
        })

        return axios.post(`${url}/users/login`, data)
            .then((response) => {
                let payload = response.data;
                AsyncStorage.setItem('token', payload.result.token);
                AsyncStorage.setItem('profile', JSON.stringify(payload.result))
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload,
                    token: payload.result.token
                })
            })
            .catch(error => {
                throw (error);
            })
    }
}

export const logout = (id) => {
    return (dispatch) => {
        dispatch({
            type: 'LOGOUT_PENDING'
        })

        return axios.patch(`${url}/users/logout/${id}`)
            .then(response => {
                let payload = response.data;
                dispatch({
                    type: 'LOGOUT_SUCCESS',
                    payload
                })
            })
            .catch(error => {
                throw (error);
            })
    }
}