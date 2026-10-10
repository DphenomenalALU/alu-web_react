import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import uiReducer from './reducers/uiReducer';

const store = createStore(uiReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root'),
);
