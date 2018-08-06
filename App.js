/* @flow */
import React from 'react';
import { Provider } from 'react-redux';
import { compose, applyMiddleware } from 'redux';
import Reactotron from 'reactotron-react-native';
import createSagaMiddleware from 'redux-saga';
import { AppNavigator, reduxMiddleware } from './src/Navigators/Navigation';
import Root from './src/Store/Reducers/Root';
import './src/Config/Reactotron';

const middleWare = [];

// redux
middleWare.push(reduxMiddleware);

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
    <AppNavigator />
  </Provider>
);

export default App;
