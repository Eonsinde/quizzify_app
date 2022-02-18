import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// You can import from local files
import Home from '../screens/home.js';
import Difficulty from '../screens/difficulty.js';
import Questions from '../screens/questions.js';
import Result from '../screens/result.js';

// or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';

const Stack = createNativeStackNavigator();

export default function ScreenStack() {
  return (
    <Stack.Navigator> 
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="Difficulty" component={Difficulty} options={{headerShown: false}} />
      <Stack.Screen name="Result" component={Result} options={{headerShown: false}} />
      <Stack.Screen name="Questions" component={Questions} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

