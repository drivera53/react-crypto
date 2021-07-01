export const fetchCryptos = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_CRYPTOS'})
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20binancecoin%2C%20tether%2C%20polkadot%2C%20cardano%2C%20ripple%2C%20litecoin%2C%20chainlink%2C%20bitcoin-cash%2C%20stellar%2C%20usd-coin%2C%20uniswap%2C%20dogecoin%2C%20wrapped-bitcoin%2C%20okb%2C%20aave%2C%20cosmos%2C%20nem%2C%20solana%20%20&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h')
        .then(response => {
            return response.json()
        })
        .then(responseJSON => {
            dispatch({ type: 'ADD_CRYPTOS', cryptos: responseJSON})
        })
    }
}