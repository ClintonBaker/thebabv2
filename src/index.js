import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './styles/index.styl';
import { store } from './store';
require('./types');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('app')
);
