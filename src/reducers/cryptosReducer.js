const cryptosReducer = (state = {
    cryptos: [],
    loading:false
}, action) => {
    switch(action.type) {
        case 'LOADING_CRYPTOS':
            return {
                ...state,
                cryptos: [...state.cryptos],
                loading: true
            }
        case 'ADD_CRYPTOS':
            return {
                ...state,
                cryptos: action.cryptos,
                loading: false
            }
        default:
            return state
    }
}

export default cryptosReducer