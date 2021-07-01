import React from 'react'
import './Crypto.css' 
import StockMiniChart from './stock_mini_chart.svg'
import {
    Link
} from 'react-router-dom'

export class Crypto extends React.Component {
    render() {
        const {name, image, id, current_price, price_change_percentage_24h, symbol} = this.props.crypto
        return (
            <Link to={"/coins/" + id}>
                <div id="crypto" className="row">
                    <div className="row__image">
                        <img key={id} src={image} alt={name} height={40}/>
                    </div>
                    <div className="row__intro">
                        <h1>{name}</h1>
                        <p>{symbol.toUpperCase()}</p>
                    </div>
                    <div className="row__mini_chart">
                        <img src={StockMiniChart} height={35} alt="Mini-chart"/>
                    </div>
                    <div className="row__numbers">
                        <p className="row__price">${Number(current_price).toFixed(2)}</p>
                        <p className="row_percentage">{price_change_percentage_24h.toFixed(2)}%</p>
                    </div> 
                </div>
            </Link>
        ) 
    }
}

export default Crypto