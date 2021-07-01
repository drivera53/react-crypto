import React from 'react'
import Crypto from './Crypto'
import './CryptoList.css'

class CryptoList extends React.Component {

    render() {
        const cryptos = this.props.cryptoData.map(c => <Crypto crypto={c} />)
        return (
            <div className="cryptoList">
                <div className="cryptoList__container">
                    <div className="crypto__header">
                        <h2>Top 20 Cryptocurrencies</h2>
                    </div>
                    <div className="crypto__content">
                        <div className="crypto__rows">
                        {cryptos}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CryptoList