import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'

const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store.store}>
        <App />
    </Provider>
  </BrowserRouter>,

  document.getElementById('root')
);

registerServiceWorker();
