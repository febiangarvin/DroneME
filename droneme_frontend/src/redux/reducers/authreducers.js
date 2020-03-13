const INITIAL_STATE = {
    email: '',
    idusers: 0,
    password: '',
    idroles: 0,
    username: '',
    verification: '',
    loading: false,
    login: false,
    register: false,
    error: '',
    addproduct: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN_LOADING':
            return { ...state, loading: true, error: '' }
        case 'LOGIN_SUCCESS':
            return { ...state, ...action.payload, login: true, loading: false, error: '' }
        case 'LOGIN_ERROR':
            return { ...state, error: action.payload, loading: false }
        case 'LOGOUT':
            return INITIAL_STATE
        case 'REGISTER_SUCCESS':
            return { ...INITIAL_STATE, register: true }
        case 'ADD_PRODUCT_SUCCESS':
            return { ...INITIAL_STATE, addproduct: true }
        default:
            return state
    }
}