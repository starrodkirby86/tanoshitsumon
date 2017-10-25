import React from 'react';
import { createBrowserHistory } from 'history';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import Main from './scenes/Main/index';
import reducers from './main/reducers';
import initialStore from './main/initialState';
import middleware from './main/middleware';

const store = createStore(
  reducers,
  initialStore,
  middleware,
);

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, store);

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Main />
    </Router>
  </Provider>
);

export default App;
