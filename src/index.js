// React
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Imporing CSS
import './index.css';

// Redux - Thunk
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

// Imporing Reducers
import { combineReducers } from 'redux'
import cryptosReducer from './reducers/cryptosReducer'
import portfoliosReducer from './reducers/portfoliosReducer'

import reportWebVitals from './reportWebVitals';


import {
  BrowserRouter as Router
} from 'react-router-dom'

const rootReducer = combineReducers({
  portfolio: portfoliosReducer,
  crypto: cryptosReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)))

ReactDOM.render(
  <Router>
    <React.StrictMode> 
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
