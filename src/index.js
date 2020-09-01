import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import App from './App';
import TokenRefresher from './component/TokenRefresher';

import './styles/main.scss';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

ReactDOM.render(
  <Provider store={store}>
    <TokenRefresher />
    <App />
  </Provider>,
  document.getElementById('root')
);