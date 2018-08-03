import React from 'react';
import { Provider } from 'react-redux';
import { compose, applyMiddleware } from 'redux';
import Reactotron from 'reactotron-react-native';
import createSagaMiddleware from 'redux-saga';

import Root from './src/Store/Reducers/Root';
import { Drawer } from './src/Navigators/Navigation';
import './src/Config/Reactotron';

const middleWare = [];

// saga
const sagaMonitor = Reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
middleWare.push(sagaMiddleware);

// reacto
const store = Reactotron.createStore(
  Root,
  {},
  compose(applyMiddleware(...middleWare)),
);

const App = () => (
  <Provider store={store}>
    <Drawer />
  </Provider>
);

export default App;
