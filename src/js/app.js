import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import { GatewayProvider, GatewayDest } from 'react-gateway';
import Routes from './routes';

const middleware = [thunk, promiseMiddleware];
middleware.push(
  createLogger({ collapsed: true })
);
const store = createStore(
  combineReducers({
    user: () => {
      return {};
    },
    routing: routerReducer
  }),
  applyMiddleware(...middleware)
);
const history = syncHistoryWithStore(browserHistory, store);
const rootNode = document.getElementById('react');

render(
  <Provider store={store}>
    <GatewayProvider>
      <div>
        <Routes history={history} getState={store.getState}/>
        <GatewayDest id="dialog-root" name="dialog-root"/>
      </div>
    </GatewayProvider>
  </Provider>,
  rootNode
);

console.log('here');
