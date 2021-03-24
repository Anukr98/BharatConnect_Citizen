import React from 'react'
import { createStackNavigator , CardStyleInterpolators } from '@react-navigation/stack'
import Drawer from '../DrawerNavigator/index'
import Login from './Login/Login'

const Stack = createStackNavigator()

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions = {{
                cardStyleInterpolator : CardStyleInterpolators.forHorizontalIOS,
                headerShown : false
            }}
        >
            <Stack.Screen name = 'Login' component = {Login} />
            <Stack.Screen name = 'MainScreen' component = {Drawer} />
        </Stack.Navigator>
    )
}

export default StackNavigator
