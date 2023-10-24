/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import globalStyles from '../../utils/_css/globalStyle';
import FastImage from 'react-native-fast-image';
import { AppIcon } from '../../utils/AppStyles';
const MyFishPondScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
      <View style={styles.listView}>
        <View style={styles.cardView}>
          <View style={styles.innercardView}>
            <FastImage style={styles.logo} resizeMode={FastImage.resizeMode.stretch} source={AppIcon.images.demoImage} />
            <Text style={styles.username}>Hello I am here </Text>
          </View>
        </View>
        <View style={styles.cardView}>
          <View style={styles.innercardView}>
            <FastImage style={styles.logo} resizeMode={FastImage.resizeMode.stretch} source={AppIcon.images.demoImage} />
            <Text style={styles.username}>Hello I am here </Text>
          </View>
        </View>
        <View style={styles.cardView}>
          <View style={styles.innercardView}>
            <FastImage style={styles.logo} resizeMode={FastImage.resizeMode.stretch} source={AppIcon.images.demoImage} />
            <Text style={styles.username}>Hello I am here </Text>
          </View>
        </View>
        <View style={styles.cardView}>
          <View style={styles.innercardView}>
            <FastImage style={styles.logo} resizeMode={FastImage.resizeMode.stretch} source={AppIcon.images.demoImage} />
            <Text style={styles.username}>Hello I am here </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
};


const styles = StyleSheet.create({
  logo: {
    width: 'auto',
    height: 150,
    objectFit: 'cover',
    borderRadius: 10
  },
  listView: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginVertical: 5,
    flexWrap: 'wrap',
  },
  cardView: {
    width: '50%',
    padding: 8,
  },
  innercardView: {
    backgroundColor: '#fff',
    padding: 5,
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 10
  },
  username: {
    marginVertical: 5,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

export default MyFishPondScreen;