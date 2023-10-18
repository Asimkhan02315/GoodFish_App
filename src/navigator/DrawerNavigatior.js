/* eslint-disable prettier/prettier */

import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContainer from '../components/DrawerContainer';
import DailyBubbleScreen from '../screens/user/DailyBubbleScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {


    return (
        <Drawer.Navigator drawerContent={(props) => <DrawerContainer {...props} />} >
            <Drawer.Screen name='DailyBubble' component={DailyBubbleScreen} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;

