import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Dashboard from './Dashboard/Dashboard'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions = {{
                headerShown : false
            }}
        >
            <Drawer.Screen name = 'Dashboard' component = {Dashboard} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator