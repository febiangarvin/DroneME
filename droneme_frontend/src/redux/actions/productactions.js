import Axios from 'axios'
import { apiurl } from '../../support/apiurl'
import { UserGetCart } from './authactions'

export const usersAddCart = (dataProduct) => {
    return (dispatch) => {
        // //get user id from local storage
        const idusers = localStorage.getItem('droneme')
        dispatch({ type: 'ADD_CART_LOADING' })
        Axios.post(`${apiurl}/users/addcart`, { dataProduct, idusers }) // //di object agar, req.body.idproducts di backend
            .then(res => {
                if (res.data.result) {
                    dispatch({ type: 'ADD_CART_SUCCESS' })
                    dispatch(UserGetCart())
                }
                else {
                    dispatch({ type: 'ADD_CART_ERROR' })
                }
            })
            .catch(err => { console.log(err) })
    }
}