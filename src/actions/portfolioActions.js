export const addPortfolio = portfolioObj => {
    return {
        type: 'ADD_PORTFOLIO',
        payload: portfolioObj
    }
}

export function fetchPortfolio() {
    return dispatch=>{       
        return fetch(`http://localhost:3001/portfolios/1`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.error) {
                alert(data.error)
            } else {
                dispatch(addPortfolio(data))
            }
        })
    }
}

export const createTrade = tradeObj => {
    return {
        type: 'CREATE_TRADE',
        payload: tradeObj
    }
}

export function createTradeFetch(tradeInfo){
    return dispatch => fetch(`http://localhost:3001/trades`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(tradeInfo) 
    })
    .then(r=>r.json())
    .then(data=>{
        if(data.error){
            alert(data.error)
        } else {
            // console.log("Created!")
            // let user_json = JSON.parse(data.user)

            
            let trade_json = JSON.parse(data.portfolio)
            // console.log(data.portfolio)
            dispatch(createTrade(trade_json))
        }
    })
}