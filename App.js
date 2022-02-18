import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';

// You can import from local files
import ScreenStack from './navigation/index'

// or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';


export default function App() {
  return (
    <NavigationContainer>
      <ScreenStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   paddingTop: Constants.statusBarHeight,
  //   backgroundColor: '#2a9d8f',
  //   padding: 8,
  // },
});
