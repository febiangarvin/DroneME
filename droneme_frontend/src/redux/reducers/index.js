import { combineReducers } from 'redux'
import AuthReducers from './authreducers'
import ProductReducers from './productreducers'
import HomeReducers from './homereducers'

export default combineReducers({
    Auth: AuthReducers,
    ProductReducers,
    HomeReducers
})