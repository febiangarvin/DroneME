const INITIAL_STATE = {
    datacheckout: [],
    checkoutlength: 0,
    loading: false,
    error: '',
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_CHECKOUT_SUCCESS':
            return { ...INITIAL_STATE, datacheckout: action.payload }
        case 'GET_CHECKOUT_LENGTH_SUCCESS':
            return { ...INITIAL_STATE, checkoutlength: action.payload }
        case 'GET_CHECKOUT_LOADING':
            return { ...INITIAL_STATE, loading: true }
        case 'GET_CHECKOUT_ERROR':
            return { ...INITIAL_STATE, message: 'Fail to get Checkout' }
        default:
            return state
    }
}