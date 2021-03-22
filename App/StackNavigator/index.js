import React from 'react'
import { createStackNavigator , CardStyleInterpolators } from '@react-navigation/stack'
import Splash from './Splash/Splash'
import Login from './Login/Login'

const Stack = createStackNavigator()

const AppNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions = {{
                cardStyleInterpolator : CardStyleInterpolators.forHorizontalIOS,
                headerShown : false
            }}
        >
            {/* <Stack.Screen name = 'SplashScreen' component = {Splash} /> */}
            <Stack.Screen name = 'Login' component = {Login} />
        </Stack.Navigator>
    )
}

export default AppNavigator