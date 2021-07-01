// import React, { Component } from 'react'
import React from 'react'
import './Crypto.css'
import {
    Link
} from 'react-router-dom'

import StockMiniChart from './stock_mini_chart.svg'

export class TradeCryptoHolding extends React.Component {

    render() {
        const {name, image, average_cost, coin_id, quantity, symbol, current_price, total_value, total_return, total_return_percentage} = this.props.coins

        return (
            <Link to={"/coins/" + coin_id}>
                <div className="app__body">
                <div id={coin_id} className="rowHoldings">
                    <div className="row__image">
                        <img key={coin_id} src={image} alt={name} height={40}/>
                    </div>
                    <div className="row__intro">
                        <h1>{name}</h1>
                        <p>{symbol.toUpperCase()} Quantity: {quantity}</p>
                        <p>Average cost: ${Number(average_cost).toFixed(2)}</p>
                    </div>
                    <div className="row__mini_chart">
                        <img src={StockMiniChart} height={35} alt="Mini-chart"/>
                    </div>
                    <div className="row__numbers">
                    <p className="row_percentage">Current price: ${Number(current_price).toFixed(2)} </p>
                    <p className="row__price">Total value: ${total_value}</p>
                    <p className="row_percentage">Total return: ${Number(total_return).toFixed(2)}({Number(total_return_percentage).toFixed(2)}%)</p>
                    </div> 
                </div>
                </div>
            </Link>
        ) 
    }
}

export default TradeCryptoHolding