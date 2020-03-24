import { combineReducers } from 'redux'
import AuthReducers from './authreducers'
import ProductReducers from './productreducers'
import HomeReducers from './homereducers'
import OrderReducers from './orderreducers'

export default combineReducers({
    Auth: AuthReducers,
    ProductReducers,
    HomeReducers,
    OrderReducers
})