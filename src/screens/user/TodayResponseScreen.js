/* eslint-disable prettier/prettier */


import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'
import BubbleSlider from '../../components/BubbleSlider'

const TodayResponseScreen = () => {

  return (
    <>

      <View>
        <Text style={styles.appHeading}>Today's response</Text>
        <BubbleSlider />
      </View>
    </>
  )
}

const styles = StyleSheet.create({

  appHeading: {
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 700
  },
});

export default TodayResponseScreen;