import React from 'react';
import { Provider } from 'react-redux';
import { compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reactotron from 'reactotron-react-native';
import { Drawer } from './src/Navigators/Navigation';
import Root from './src/Store/Reducers/Root';
import './src/Config/Reactotron';

const sagaMonitor = Reactotron.createSagaMonitor();

const middleWare = [];
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
middleWare.push(sagaMiddleware);

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
