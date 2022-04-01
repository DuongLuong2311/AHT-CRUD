import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Provider } from './store/contextProvider'

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
