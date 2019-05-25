import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import Header from './src/components/Header';
import CryptoContainer from './src/components/CryptoContainer';

import Store from './src/redux/Store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View>
          <Header />
          <CryptoContainer />
        </View>
      </Provider>
    );
  }
}
