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
import Profile from './src/screens/Profile';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './src/reducers/reducer';

const store = createStore(reducer);

const App = () => {
  const Stack = createStackNavigator();
  const myOptions = {
    headerTintColor: 'white',
    headerStyle: {backgroundColor: '#006aff'},
  };
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{...myOptions, title: 'My Home'}}
        />
        <Stack.Screen
          name="Create"
          component={CreateEmployee}
          options={{...myOptions, title: 'Create Employee'}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{...myOptions, title: 'Profile Employee'}}
        />
      </Stack.Navigator>
      {/* <Home /> */}
      {/* <CreateEmployee /> */}
      {/* <Profile /> */}
    </View>
  );
};

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
