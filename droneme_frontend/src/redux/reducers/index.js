import { combineReducers } from 'redux'
import AuthReducers from './authreducers'

export default combineReducers({
    Auth: AuthReducers
})