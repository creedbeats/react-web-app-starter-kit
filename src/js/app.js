import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { GatewayProvider, GatewayDest } from 'react-gateway';
import Routes from './routes';
import combinedReducers from './reducers';

const middleware = [thunk, promiseMiddleware];

if (process.env.NODE_ENV === `development`) {
  const createLogger = require(`redux-logger`);
  const logger = createLogger({ collapsed: true });
  middleware.push(logger);
}

const store = createStore(
  combinedReducers,
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
