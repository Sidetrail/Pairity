import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Drawer } from './src/Navigators/Navigation';

import Root from './src/Store/Reducers/Root';

const store = createStore(Root);

const App = () => (
  <Provider store={store}>
    <Drawer />
  </Provider>
);

export default App;
