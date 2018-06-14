import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

import Home from './containers/Home';
import Draw from './containers/Draw';

// import 'antd/dist/antd.css';
import '../assets/stylesheets/application.scss';


const reducers = combineReducers({
  // key: reducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/draw/:id" exact={true} component={Draw}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
