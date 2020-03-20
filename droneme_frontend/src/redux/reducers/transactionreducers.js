const INITIAL_STATE = {
    datacart: [],
    cartlength: 0,
    loading: false,
    error: '',
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_DATA_CART_SUCCESS':
            return { ...INITIAL_STATE, datacart: action.payload }
        case 'GET_DATA_CART_LENGTH_SUCCESS':
            return { ...INITIAL_STATE, cartlength: action.payload }
        case 'GET_DATA_CART_LOADING':
            return { ...INITIAL_STATE, loading: true }
        case 'GET_DATA_CART_ERROR':
            return { ...INITIAL_STATE, message: 'Fail to get Cart' }
        default:
            return state
    }
}