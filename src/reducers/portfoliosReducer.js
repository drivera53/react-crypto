const portfoliosReducer = (state = {
    portfolio: {},
    loading:true
}, action) => {
    switch(action.type) {
        case 'LOADING_PORTFOLIO':
            return {
                ...state,
                portfolio: [...state.portfolio],
                loading: true
            }
        case 'ADD_PORTFOLIO':
            return {
                ...state,
                portfolio: action.payload,
                loading: false
            }
        case 'CREATE_TRADE':
            return {
                ...state,
                portfolio: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export default portfoliosReducer