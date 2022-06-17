import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import store from './Store';
import App from './App';
import './index.css';
import 'flowbite';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
