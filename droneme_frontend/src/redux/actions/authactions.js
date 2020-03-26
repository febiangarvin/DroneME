import Axios from 'axios'
import { apiurl } from '../../support/apiurl'
import Swal from 'sweetalert2'

// //function action untuk register (ter-trigger dari frontend) dengan parameter data yang akan dikirim
export const RegisterAction = ({ username, email, password, confirmpassword, address, province, postalcode }) => {
    return (dispatch) => {
        dispatch({ type: 'LOGIN_LOADING' }) // //sebelum get, melakukan LOADING
        Axios.post(apiurl + '/auth/register', { // //function post dengan data yang akan dibawa
            username, email, password, confirmpassword, address, province, postalcode
        }).then((res) => {
            console.log(res)
            if (res.data.status === 'error') { // //jika terjadi error
                return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: res.data.message
                }).then(() => dispatch({ type: 'LOGIN_ERROR', payload: res.data.message }))
            }
            else { // //jika berhasil, maka akan men-trigger reducer
                dispatch({ type: 'REGISTER_SUCCESS' }) // //me-return sebuah dispatch dengan type SUCCESS
            }
        }).catch((err) => {
            console.log(err);
            // //jika terjadi error, maka akan me-return dispatch dengan type ERROR, dan mengirim payload yang menjelaskan error tersebut
            dispatch({ type: 'LOGIN_ERROR', payload: { error: 'System Error' } })
        })
    }
}

export const LoginSuccessAction = (datauser) => { // //function action login yang sukses
    return {
        type: 'LOGIN_SUCCESS', // //me-return sebuah type yang dibuat di reducer
        payload: datauser // //me-return sebuah payload yang berupa parameter dari function action login
    }
}

export const LogoutAction = () => { // //function action logout
    return {
        type: 'LOGOUT' // //me-return sebuah type yang dibuat di reducer
    }
}

export const LoginThunk = (username, password) => { // //function action login, dengan mengirim 2 parameter (username dan password)
    console.log('Masuk');
    return (dispatch) => { // //me-return sebuah dispatch dengan type yang telah dibuat di reducer
        dispatch({ type: 'LOGIN_LOADING' }) // //sebelum get, melakukan LOADING
        Axios.get(`${apiurl}/auth/login?username=${username}&password=${password}`)
            .then((res) => {
                console.log(res.data.result[0]);
                if (res.data.result.length) { // //kondisi jika data berhasil diambil
                    console.log(res.data.result);
                    // //membuat penyimpanan pada localstorage dengan nama 'droneme', yang berupa result dari data per idusers
                    localStorage.setItem('droneme', res.data.result[0].idusers)
                    // //me-return sebuah dispatch dengan type SUCCESS, yang juga mengirimkan sebuah payload result dari data per idusers
                    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.result[0] })
                }
                else { // //kondisi jika data gagal diambil
                    return Swal.fire({
                        icon: 'error',
                        title: 'Oops... <br/> Username/Password is incorrect',
                        text: res.data.message
                    }).then(() => dispatch({ type: 'LOGIN_ERROR', payload: res.data.message }))
                }
            }).catch((err) => {
                console.log(err)
                // //jika terjadi error, maka akan me-return dispatch dengan type ERROR, dan mengirim payload yang menjelaskan error tersebut
                dispatch({ type: 'LOGIN_ERROR', payload: 'server error' })
            })
    }
}

export const KeepLogin = () => { // //function untuk tetap membuat keaddan login, agar saat berpindah page kondisi tetap login dengan data users
    return (dispatch) => {
        var id = localStorage.getItem('droneme') // //variable yang berisi item dari localstorage (dikirim dengan setItem saat men-trigger function login)
        Axios.get(`${apiurl}/auth/keeplogin/${id}`)
            .then((res) => {
                console.log(res.data.result[0]);
                if (res.data.result.length) { // //jika data berhasil diambil
                    // //me-return sebuah dispatch dengan type SUCCESS, yang juga mengirimkan sebuah payload result dari data per idusers
                    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.result[0] })
                } else { // //jika gagal
                    dispatch({ type: 'LOGIN_ERROR', payload: 'Username or Password is Incorrect' })
                }
            }).catch((err) => {
                console.log(err)
                // dispatch({ type: 'LOGIN_ERROR', payload: 'server error' })
            })
            .finally(() => { // //mengeksekusi kode setelah then catch dilakukan, apapun hasilnya. Namun mengirimkan sebuah dispatch dengan type error
                dispatch({ type: 'LOGIN_ERROR' })
            })
    }
}

export const UserGetCart = () => { // //function untuk mendapatkan data cart user yang login
    return (dispatch) => {
        const idusers = localStorage.getItem('droneme') // //variable yang berisi item dari localstorage (dikirim dengan setItem saat men-trigger function login)
        Axios.get(`${apiurl}/users/usergetcart/${idusers}`)
            .then((res) => { // //jika berhasil
                // //me-return sebuah dipatch yang dengan type SUCCESS (length/banyaknya product di cart, dan cart nya itu sendiri)
                dispatch({ type: 'GET_CART_LENGTH_SUCCESS', payload: res.data.result.length })
                dispatch({ type: 'GET_CART_SUCCESS', payload: res.data.result })
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

// //___________________________________ UN-USED CODES _________________________________________________// //

// export const UserGetCheckout = () => {
//     return (dispatch) => {
//         const idusers = localStorage.getItem('droneme')
//         Axios.get(`${apiurl}/users/usergetcheckout/${idusers}`)
//             .then((res) => {
//                 dispatch({ type: 'GET_CHECKOUT_LENGTH_SUCCESS', payload: res.data.result.length })
//                 dispatch({ type: 'GET_CHECKOUT_SUCCESS', payload: res.data.result })
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }
// }

// export const UserGetCheckoutDetail = () => {
//     return (dispatch) => {
//         const idusers = localStorage.getItem('droneme')
//         Axios.get(`${apiurl}/users/usergetcheckoutdetail/${idusers}`)
//             .then((res) => {
//                 dispatch({ type: 'GET_CART_LENGTH_SUCCESS', payload: res.data.result.length })
//                 dispatch({ type: 'GET_CART_SUCCESS', payload: res.data.result })
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }
// }

// export const ResetPassAction = newpass => {
//     return {
//         type: "RESET_PASS",
//         payload: newpass
//     };
// };
