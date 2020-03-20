import Axios from 'axios'
import { apiurl } from '../../support/apiurl'
import Swal from 'sweetalert2'

export const LoginSuccessAction = (datauser) => {
    return {
        type: 'LOGIN_SUCCESS',
        payload: datauser
    }
}

export const LogoutAction = () => {
    return {
        type: 'LOGOUT'
    }
}

export const LoginThunk = (username, password) => {
    console.log('Masuk');
    return (dispatch) => {
        dispatch({ type: 'LOGIN_LOADING' })
        Axios.get(`${apiurl}/auth/login?username=${username}&password=${password}`)
            .then((res) => {
                console.log(res.data.result[0]);
                if (res.data.result.length) {
                    console.log(res.data.result);
                    localStorage.setItem('droneme', res.data.result[0].idusers)
                    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.result[0] })
                }
                else {
                    return Swal.fire({
                        icon: 'error',
                        title: 'Oops... <br/> Username/Password is incorrect',
                        text: res.data.message
                    }).then(() => dispatch({ type: 'LOGIN_ERROR', payload: res.data.message }))
                }
                // else if (res.data.status === 'error') {
                //     return Swal.fire({
                //         icon: 'error',
                //         title: 'Oops...',
                //         text: res.data.message
                //     }).then(() => dispatch({ type: 'LOGIN_ERROR', payload: res.data.message }))
                // }
            }).catch((err) => {
                console.log(err)
                dispatch({ type: 'LOGIN_ERROR', payload: 'server error' })
            })
    }
}

export const KeepLogin = () => {
    return (dispatch) => {
        var id = localStorage.getItem('droneme')
        Axios.get(`${apiurl}/auth/keeplogin/${id}`)
            .then((res) => {
                console.log(res.data.result[0]);
                if (res.data.result.length) {
                    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.result[0] }) // //payload untuk kirim data ke reducers
                } else {
                    dispatch({ type: 'LOGIN_ERROR', payload: 'Password Incorrect' })
                }
            }).catch((err) => {
                console.log(err)
                // dispatch({ type: 'LOGIN_ERROR', payload: 'server error' })
            })
            .finally(() => {
                dispatch({ type: 'LOGIN_ERROR' })
            })
    }
}

// //function untuk mendapatkan data cart user yang login
export const UserGetCart = () => {
    return (dispatch) => {
        // dispatch({ type: 'GET_CART_LOADING' })
        const idusers = localStorage.getItem('droneme')
        Axios.get(`${apiurl}/users/usergetcart/${idusers}`)
            .then((res) => {
                dispatch({ type: 'GET_CART_LENGTH_SUCCESS', payload: res.data.result.length })
                dispatch({ type: 'GET_CART_SUCCESS', payload: res.data.result })
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const RegisterAction = ({ username, email, password, confirmpassword, address, province, postalcode }) => {
    return (dispatch) => {
        dispatch({ type: 'LOGIN_LOADING' })
        Axios.post(apiurl + '/auth/register', {
            username, email, password, confirmpassword, address, province, postalcode
        }).then((res) => {
            console.log(res)
            if (res.data.status === 'error') {
                return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: res.data.message
                }).then(() => dispatch({ type: 'LOGIN_ERROR', payload: res.data.message }))
            }
            else {
                dispatch({ type: 'REGISTER_SUCCESS' })
            }
        }).catch((err) => {
            console.log(err);
            dispatch({ type: 'LOGIN_ERROR', payload: { error: 'System Error' } })
        })
    }
}

// export const AddProductSuccess = () => {
//     return {type: 'ADD_PRODUCT_SUCCESS'}
// }
