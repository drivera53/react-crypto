// import React, { Component } from 'react'
import React from 'react'
import './Crypto.css'

import StockMiniChart from './stock_mini_chart.svg'

export class MyHoldings extends React.Component {
    render() {
        const coinData = this.props.coinData
        return (
            <>
                <div className="crypto__content">
                    {/* <div id={name} className="row"> */}
                    <div className="row">
                        <div className="row__intro">
                            <h1>My Holdings:</h1>
                        </div>
                        <div className="row__intro">
                            <p> Quantity: {Number(coinData.quantity).toFixed(2)}</p>
                            <p>Average cost: ${Number(coinData.average_cost).toFixed(2)}</p>
                        </div>
                        <div className="row__mini_chart">
                            <img src={StockMiniChart} height={35} alt="Mini-chart"/>
                        </div>
                        <div className="row__numbers">
                            {/* <p className="row_percentage">Total return: $ TODO</p> */}
                            <p className="row__price">Total value: ${Number(coinData.total_value).toFixed(2)}</p>
                            <p className="row__price">Total return: ${Number(coinData.total_return).toFixed(2)}({Number(coinData.total_return_percentage).toFixed(2)}%)</p>
                        </div> 
                    </div>
                </div>      
            </>
        ) 
    }
}


export default MyHoldings