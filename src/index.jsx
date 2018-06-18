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

import drawsReducer from './reducers/draws_reducer';
import registerReducer from './reducers/register_reducer';
import registerVisibleReducer from './reducers/registerVisible_reducer';

const initialState = {
  draws: [],
  registerVisible: false,
  register: { id: null,
              start: null,
              coin: null,
              title: null,
              description: null,
              status: null,
              bet: null,
              entries: null,
              logo: null }
};

const identityReducer = (state = null) => state;

const reducers = combineReducers({
  draws: drawsReducer,
  register: registerReducer,
  registerVisible: registerVisibleReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/draw/:id" exact={true} component={Draw}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
