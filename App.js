import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar, Text , View } from 'react-native';
import Navigation from './App/StackNavigator/index'

const App = () => {

  return (
    <NavigationContainer>
      <StatusBar backgroundColor = '#ffffffef' />
      <View style = {{ flex : 1 , backgroundColor : 'white' }}>
        <Navigation />
      </View>
    </NavigationContainer>
  );
};

export default App