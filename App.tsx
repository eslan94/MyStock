import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from './src/screens/LoginScreen'
import { StackNavigator } from './src/navigator/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  )
}

export default App;