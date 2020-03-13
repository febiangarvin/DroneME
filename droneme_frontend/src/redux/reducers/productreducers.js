const INITIAL_STATE = {
    addproductstatus: false,
    addcartstatus: false,
    errormessage: '',
    loading: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_SUCCESS':
            return { ...INITIAL_STATE, addproductstatus: true }
        case 'ADD_CART_LOADING':
            return { ...INITIAL_STATE, loading: true }
        case 'ADD_CART_SUCCESS':
            return { ...INITIAL_STATE, addcartstatus: true }
        case 'ADD_CART_ERROR':
            return { ...INITIAL_STATE, errormessage: 'Fail to add cart' }
        default:
            return state
    }
}