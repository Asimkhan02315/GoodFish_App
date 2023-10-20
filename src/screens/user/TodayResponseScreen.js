/* eslint-disable prettier/prettier */


import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'
import ResponseCard from '../../components/ResponseCard'

const TodayResponseScreen = () => {

  return (
    <>

      <ResponseCard />
      <ResponseCard />
      <ResponseCard />
      <ResponseCard />
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