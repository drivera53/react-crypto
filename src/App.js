import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCryptos } from './actions/cryptoActions'
import { fetchPortfolio } from './actions/portfolioActions'
import CryptoList from './components/CryptoList'
import Dashboard from './components/Dashboard'
import TradeCrypto from './components/TradeCrypto'
import NavBar from './components/NavBar'
import TradeCryptoHistoryList from './components/TradeCryptoHistoryList'


import './App.css';

import Loading from './svg/Loading'

import {
  Switch,
  Route
} from 'react-router-dom'

class App extends Component {

  fetchEverything = () => {
    this.props.fetchPortfolio()
    this.props.fetchCryptos()
  }

  componentDidMount() {
    this.fetchEverything()
  }

  handleCryptoListLoading = () => {
    if(this.props.cryptoloading) {
      return <Loading />
    } else {
      return <CryptoList cryptoData={this.props.cryptoData} />
    }
  }

  handlePortfolioLoading = () => {
    if(this.props.portfolioLoading) {
      return <Loading />
    } else {
      return <Dashboard portfolioData={this.props.portfolioData}/>
    }
  }

  handleCryptoProps = (props) => {
    if(this.props.portfolioLoading) {
      return <Loading />
    } else {
      const foundCrypto = this.props.cryptoData.find(p=> p.id === props.match.params.coin_id)
      return <TradeCrypto crypto={foundCrypto} portfolioData={this.props.portfolioData}/>
    }
  }

  handleTradeCryptoHistoryListLoading = () => {
    if(this.props.portfolioLoading) {
      return <Loading />
    } else {
      return <TradeCryptoHistoryList portfolioData={this.props.portfolioData}/>
    }
  }

  render() {
    return (
      <>
        <div className="App">
            <div className="app__navBar">
              <NavBar />
            </div>
            <Switch>
              <Route exact path="/">   
                <div className="app__body">
                  <div className="app__container">
                    {this.handlePortfolioLoading()}
                    {this.handleCryptoListLoading()}
                  </div>
                </div>
              </Route>

              <Route exact path="/trades">
                {this.handleTradeCryptoHistoryListLoading()}
              </Route>

              <Route path="/coins/:coin_id" component={this.handleCryptoProps} />

              <Route path="/" render={() => <div><h1>Oops! That page doesn't exist.</h1></div>} />
            </Switch>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    cryptoData: state.crypto.cryptos,
    cryptoloading: state.crypto.loading,
    portfolioData: state.portfolio.portfolio,
    portfolioLoading: state.portfolio.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCryptos: () => dispatch(fetchCryptos()),
    fetchPortfolio: () => dispatch(fetchPortfolio())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


