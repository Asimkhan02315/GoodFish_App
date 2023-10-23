/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-dupe-keys */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import ResponseCard from '../../components/ResponseCard';
import { AppStyles } from '../../utils/AppStyles';


const BookmarkScreen = () => {
  let Array = [{ id: 0 }, { id: 1 }, { id: 2 }]


  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        {Array && Array.map((item, index) => {
          return (
            <View style={styles.cardContainer} key={index}>
              <Text style={[styles.badgeText, { fontWeight: 700 }]}>23/10/2023</Text>
              <Text style={styles.questionText}>What is the meaning of life to you, and how do you seek to find purpose in your journey?</Text>
              <ResponseCard cardStyle={{ elevation: 3 }} />
            </View>
          )
        })}
      </View>
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  cardContainer: {
    width: '100%',
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 1,
      height: 1
    },
    elevation: 30,
    shadowOpacity: 0.19,
    shadowRadius: 10,
    borderRadius: 15,
    flexDirection: "column",
    padding: 10,
    alignItems: 'center',
    gap: 10,
    marginVertical: 10,
  },
  badgeText: {
    width: '100%',
    textAlign: 'left',
    fontSize: 15,
    backgroundColor: AppStyles.color.tint,
    width: 'auto',
    marginRight: 'auto',
    color: '#fff',
    padding: 5,
    borderRadius: 50,
    paddingHorizontal: 15,
  },
  questionText: {
    color: '#000',
    fontSize: 14,
  }

})

export default BookmarkScreen