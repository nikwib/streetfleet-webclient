import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/configureStore';
import './img/background.png'
import App from './App';
import './index.css';

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
