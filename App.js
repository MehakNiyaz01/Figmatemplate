import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useState}from "react"
import OTPInput from "./Components/toggle"
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/MainScreen.js';
import TabNavigator from './Components/BottomTabNavigator';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer from @react-navigation/native


const AppSwitchNavigator = createSwitchNavigator({
  Login: {
    screen: LoginScreen,
  },
  BottomTab: {
    screen: TabNavigator,
  },
}, {
  initialRouteName: 'Login',
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default function App() {
  return (
    <NavigationContainer> 
      <AppContainer />
    </NavigationContainer>
  );
}