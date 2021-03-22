import 'react-native-gesture-handler';
import React from 'react'
import { View, SafeAreaView } from 'react-native'
import AppNavigator from './App/StackNavigator/index'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
        <View style = {{ flex : 1 , backgroundColor : 'white' }}>
          <AppNavigator />
        </View>
    </NavigationContainer>
  )
}

export default App