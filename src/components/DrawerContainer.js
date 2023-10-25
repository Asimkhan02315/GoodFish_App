/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MenuButton from './MenuButton';
import { AppIcon } from '../utils/AppStyles';
import { connect } from 'react-redux';
import { Text } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import { logoutAction } from '../redux/action/authAction';

function DrawerContainer({ navigation, auth, logoutAuth, state }) {

  const [active, setActive] = useState(state.index);

  const handleLogout = () => {
    // const { token } = auth;\
    logoutAuth();
    console.log(auth)
    navigation.navigate('LoginScreen')
  };

  return (
    <View style={[styles.content, { backgroundColor: '#232530' }]}>
      <View style={[styles.view, { backgroundColor: '#201f2b' }]}>
        <FastImage
          style={{ width: 70, height: 70 }}
          source={AppIcon.images.logo}
        />
        <Text style={{ color: '#fff' }} variant="headlineMedium">Good Fish</Text>
      </View>
      <View style={styles.container}>
        <MenuButton
          title="Daily Bubble"
          icon='chart-bubble'
          active={state.index === 0 ? true : false}
          onPress={() => {
            navigation.navigate('DailyBubble');
          }}
        />

        <MenuButton
          title="Today Response"
          icon='calendar-today'
          active={state.index === 1 ? true : false}
          onPress={() => {
            navigation.navigate('TodayResponse');
          }}
        />

        <MenuButton
          title="Bookmarks"
          icon='bookmark'
          active={state.index === 2 ? true : false}
          onPress={() => {
            navigation.navigate('Bookmarks');
          }}
        />

        <MenuButton
          title="Go Fish"
          icon='fish'
          active={state.index === 3 ? true : false}
          onPress={() => {
            navigation.navigate('GoFish');
          }}
        />

        <MenuButton
          title="My Fish Pond"
          icon='fishbowl-outline'
          active={state.index === 4 ? true : false}
          onPress={() => {
            navigation.navigate('MyFishPond');
          }}
        />

        <MenuButton
          title="Settings"
          icon='account-settings'
          active={state.index === 5 ? true : false}
          onPress={() => {
            navigation.navigate('Setting');
          }}
        />

        <MenuButton
          title="Feedback"
          icon='wechat'
          active={state.index === 6 ? true : false}
          onPress={() => {
            navigation.navigate('Feedback');
          }}
        />


        <MenuButton
          title="Support"
          icon='account-supervisor'
          active={state.index === 7 ? true : false}
          onPress={() => {
            navigation.navigate('Support');
          }}
        />

        <MenuButton
          title="Subscription"
          icon='youtube-subscription'
          active={state.index === 8 ? true : false}
          onPress={() => {
            navigation.navigate('Subscription');
          }}
        />

        <MenuButton
          title="Logout"
          icon='logout'
          active={false}
          onPress={() => {
            handleLogout()
          }}
        />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  view: {
    paddingVertical: 15,
    paddingLeft: 10,
    paddingTop: 35,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    // paddingHorizontal: 20,
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  logoutAuth: () => dispatch(logoutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContainer);

// export default DrawerContainer
