/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import MenuButton from './MenuButton';
import { AppIcon } from '../utils/AppStyles';
// import { connect } from 'react-redux';
// import { logoutSuccess } from '../redux/actions/authActions';
// import { authService } from '../utils/_services';
import { Text } from 'react-native-paper';
import FastImage from 'react-native-fast-image';

function DrawerContainer({ navigation, auth, logout }) {
  const [active, setActive] = useState(0);
  const handleLogout = () => {
    // const { token } = auth;
    // authService.logout(token).then(res => {
    //   console.log(res);
    // }).catch(error => {
    //   console.log(error)
    // })
    // navigation.navigate('LoginStack')
    // setTimeout(() => {
    //   logout();
    // }, 1500);
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
        {/* <MenuButton
          title="Home"
          icon='home'
          active={active === 0 ? true : false}
          onPress={() => {
            setActive(0);
            navigation.navigate('Tab');
          }}
        /> */}
        <MenuButton
          title="Daily Bubble"
          icon='chart-bubble'
          active={active === 1 ? true : false}
          onPress={() => {
            setActive(1);
            navigation.navigate('DailyBubble');
          }}
        />

        <MenuButton
          title="Today Response"
          icon='calendar-today'
          active={active === 1 ? true : false}
          onPress={() => {
            setActive(1);
            navigation.navigate('TodayResponse');
          }}
        />

        <MenuButton
          title="Bookmarks"
          icon='bookmark'
          active={active === 1 ? true : false}
          onPress={() => {
            setActive(1);
            navigation.navigate('Bookmarks');
          }}
        />

        <MenuButton
          title="Go Fish"
          icon='fish'
          active={active === 1 ? true : false}
          onPress={() => {
            setActive(1);
            navigation.navigate('GoFish');
          }}
        />

        <MenuButton
          title="My Fish Pond"
          icon='fishbowl-outline'
          active={active === 1 ? true : false}
          onPress={() => {
            setActive(1);
            navigation.navigate('MyFishPond');
          }}
        />

        <MenuButton
          title="Settings"
          icon='account-settings'
          active={active === 1 ? true : false}
          onPress={() => {
            setActive(1);
            navigation.navigate('Setting');
          }}
        />

        <MenuButton
          title="Feedback"
          icon='wechat'
          active={active === 1 ? true : false}
          onPress={() => {
            setActive(1);
            navigation.navigate('Feedback');
          }}
        />


        <MenuButton
          title="Support"
          icon='account-supervisor'
          active={active === 1 ? true : false}
          onPress={() => {
            setActive(1);
            navigation.navigate('Support');
          }}
        />

        <MenuButton
          title="Subscription"
          icon='youtube-subscription'
          active={active === 1 ? true : false}
          onPress={() => {
            setActive(1);
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

// const mapStateToProps = (state) => ({
//   auth: state.auth
// });

// const mapDispatchToProps = (dispatch) => ({
//   logout: () => dispatch(logoutSuccess()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(DrawerContainer);

export default DrawerContainer