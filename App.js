/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Home from './src/screens/Home';
import CreateEmployee from './src/screens/CreateEmployee';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      <CreateEmployee></CreateEmployee>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default App;
