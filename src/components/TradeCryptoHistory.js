// import React, { Component } from 'react'
import React from 'react'
import './Crypto.css'

import StockMiniChart from './stock_mini_chart.svg'

class TradeCryptoHistory extends React.Component {

    render() {
        const {coin_id, id, name, price, quantity, trade_type, created_at, image, symbol} = this.props.trade

        return (
            <div id={coin_id} className="row" name={name}>
                <div className="row__image">
                    <img key={coin_id} src={image} alt={name} height={40}/>
                </div>
                <div className="row__intro">
                    <h1>{name}</h1>
                    <p>Fill date: {created_at}</p>
                </div>
                <div className="row__mini_chart">
                    <img src={StockMiniChart} height={35} alt="Mini-chart"/>
                </div>
                <div className="row__numbers">
                    <p>Trade type: {trade_type.toUpperCase()}</p>
                    <p className="row__price">Filled quantity: {quantity} {symbol.toUpperCase()} at ${price}</p>
                </div> 
            </div>
        ) 
    }
}

export default (TradeCryptoHistory) 