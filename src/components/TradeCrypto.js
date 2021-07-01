// import React, { Component } from 'react'
import React from 'react'
import './Crypto.css'
import LineGraph from './LineGraph'
import MyHoldings from './MyHoldings'
import { createTradeFetch } from '../actions/portfolioActions'
import { connect } from 'react-redux'

export class TradeCrypto extends React.Component {
    state = {
        name: this.props.crypto.name,
        trade_type: "buy",
        coin_id: this.props.crypto.id,
        price: this.props.crypto.current_price,
        quantity: '',
        portfolio_id: this.props.portfolioData.id,
        symbol: this.props.crypto.symbol,
        image: this.props.crypto.image
    }

    displayMyHoldings = () => {
        const foundPorfolioCoin = this.props.portfolioData.coins.find(p=> p.coin_id === this.props.crypto.id)
        if(typeof foundPorfolioCoin != "undefined")
            return <MyHoldings coinData={foundPorfolioCoin}/>
    }

    handleQuantityChange = event => {
        this.setState({
            quantity: Number(event.target.value)
        })
        // console.log(this.state)
    }

    buySellChange = event => {
        this.setState({
            trade_type: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state)
        this.props.createTradeFetch(this.state)
        // this.props.createTradeFetch(this.state)
        this.setState({
            quantity: ""
        })
    }

    render() {
        const portfolioData = this.props.portfolioData
        // const foundPorfolioCoin = portfolioData.coins.find(p=> p.coin_id === this.props.crypto.id)
        const {id, coin_id, symbol, name, image, current_price, market_cap, market_cap_rank, total_volume, high_24h, low_24h, price_change_24h, price_change_percentage_24h, market_cap_change_24h, market_cap_change_percentage_24h, circulating_supply, total_supply, price_change_percentage_1h_in_currency, average_cost, quantity, total_value, total_return, total_return_percentage} = this.props.crypto
        return (
            <>
            <div className="cryptoList">
                <div className="cryptoList__container">
                    {/* <h1>Buying Power: ${(current_portfolio.current_balance * 1).toFixed(2)}</h1> */}
                    <div className="crypto__header_medium">
                        <img key={name} src={image} alt={name} height={80}/>
                        <h1>{name} ({symbol.toUpperCase()}) ${Number(current_price).toFixed(2)}</h1>
                        <h3>{Number(price_change_percentage_24h).toFixed(2)}%</h3>
                        <div className="dashboard__chart">
                            <LineGraph />
                        </div>
                    </div>
                    
                    <div className="crypto__content">
                        <div id={name} className="row">
                            <div className="row__intro">
                                <p>Market Cap Rank: #{market_cap_rank}</p>
                                <p>Trading Volume: ${total_volume}</p>
                                <p>24h Low/24h High: ${low_24h}/${high_24h}</p>
                            </div>
                            <div className="row__intro">
                                <p>Market Cap: ${market_cap}</p>
                                <p>Circulating Supply: {circulating_supply}</p>
                                <p>Price Change 24h: ${price_change_24h}</p>
                            </div>
                            <div className="row__intro">
                            <p>Market Cap Change 24h: ${market_cap_change_24h} ({Number(market_cap_change_percentage_24h).toFixed(2)}%)</p>
                            <p>Total Supply: {total_supply}</p>
                                <p>Price Change Percentage 1h: {Number(price_change_percentage_1h_in_currency).toFixed(2)}%</p>
                                
    
                            </div>
                        </div>
                    </div>

                    <div className="crypto__header">
                        <h1>Buying Power: ${Number(portfolioData.buying_power).toFixed(2)}</h1>
                    </div>

                    {this.displayMyHoldings()}

                    <div className="crypto__header_medium">
                        <form onSubmit={this.handleSubmit}>
                            <p>You can buy up to {Number(portfolioData.buying_power/current_price).toFixed(1)} {name} coins.</p>
                            <h1>Trade</h1>
                            <label>Quantity:</label>
                            <br></br>
                            <input
                                name="quantity"
                                placeholder="Quantity"
                                onChange={this.handleQuantityChange}
                                value={this.state.quantity}
                            />
                            <select id="buySell" onChange={this.buySellChange}>
                                <option value="buy">Buy</option>
                                <option value="sell">Sell</option>
                            </select>
                            <br></br>
                            <input type='submit'/>
                            <h1>Total: ${(this.state.quantity * current_price).toFixed(2)}</h1>
                        </form>
                    </div>
                </div>
            </div>
            </>
        ) 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createTradeFetch: (tradeInfo) => dispatch(createTradeFetch(tradeInfo))
    }
}

export default connect(null, mapDispatchToProps)(TradeCrypto)