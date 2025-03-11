import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './Components/App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './Store/reducers/rootReducer';

const reduxStore = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>

  </React.StrictMode>
);


