/* eslint-disable prettier/prettier */

import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContainer from '../components/DrawerContainer';
import DailyBubbleScreen from '../screens/user/DailyBubbleScreen';
import TodayResponseScreen from '../screens/user/TodayResponseScreen';
import BookmarkScreen from '../screens/user/BookmarkScreen';
import GoFishScreen from '../screens/user/GoFishScreen';
import MyFishPondScreen from '../screens/user/MyFishPondScreen';
import SettingScreen from '../screens/user/SettingScreen';
import FeedbackScreen from '../screens/user/FeedbackScreen';
import SupportScreen from '../screens/user/SupportScreen';
import SubscriptionScreen from '../screens/user/SubscriptionScreen';
import { Icon } from 'react-native-paper';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    const navigation = useNavigation();

    return (
        <Drawer.Navigator
        screenOptions={{
            // headerLeft: (props) =>{
            //     console.log(props)
            //  },
           
            headerRight: (props) => (
                <>
                <View style={{gap : 20, flexDirection:'row', marginRight : 10}}>
                <Icon source='bell' size={30} color='#fff' />
                <Icon source='account-circle' size={30} color='#fff' />
                </View>
                </>
              ),
            headerStyle: {
                backgroundColor: '#1d6495',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
          }} 
        drawerContent={(props) => <DrawerContainer {...props} />} >
            <Drawer.Screen name='DailyBubble'  component={DailyBubbleScreen} />
            <Drawer.Screen name='TodayResponse' component={TodayResponseScreen} />
            <Drawer.Screen name='Bookmarks' component={BookmarkScreen} />
            <Drawer.Screen name='GoFish' component={GoFishScreen} />
            <Drawer.Screen name='MyFishPond' component={MyFishPondScreen} />
            <Drawer.Screen name='Setting' component={SettingScreen} />
            <Drawer.Screen name='Feedback' component={FeedbackScreen} />
            <Drawer.Screen name='Support' component={SupportScreen} />
            <Drawer.Screen name='Subscription' component={SubscriptionScreen} /> 
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;

