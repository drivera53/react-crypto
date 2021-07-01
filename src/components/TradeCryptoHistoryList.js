import React from 'react'
import TradeCryptoHistory from './TradeCryptoHistory'

import './CryptoList.css'

class TradeCryptoHistoryList extends React.Component {
    
    render() {
        const sortedDataByName = [].concat(this.props.portfolioData.trades).sort((a,b) => a.name > b.name ? 1 : -1)
        console.log("Sorted By Name:")
        console.log(sortedDataByName)
        const sortedDataByQuantity = [].concat(this.props.portfolioData.trades).sort((a,b) => a.quantity > b.quantity ? 1 : -1)
        console.log("Sorted By Quantity:")
        console.log(sortedDataByQuantity)
        const trades = this.props.portfolioData.trades.map(c => <TradeCryptoHistory trade={c}/>)
        return (
            <div className="cryptoList">
                <div className="cryptoList__container">
                    <div className="crypto__header">
                        <h1>Trading history</h1>
                    </div>
                    <div className="crypto__content">
                        <div className="crypto__rows">
                            {trades}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default TradeCryptoHistoryList
