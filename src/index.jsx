import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Root from './Root'
import store from './store/store'
import './style/index.less'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.getStore()}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
