import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/App';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'
import reducers from './module'


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middlewares = [reduxThunk];

const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middlewares),
    devTools
  )
);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


