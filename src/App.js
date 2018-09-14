import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import MainConnected from './containers/MainConnected';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainConnected />
      </Provider>
    );
  }
}

export default App;
