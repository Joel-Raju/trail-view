import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { TrailView } from './components';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TrailView />
      </Provider>
    );
  }
}

export default App;
