import 'babel-polyfill'; // polyfill for regenerator runtime

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { AppComponent } from './components/App';
import { store } from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  document.getElementById('root'),
);
