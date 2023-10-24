/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react';
import globalStyles from '../../utils/_css/globalStyle';
import { Button, RadioButton } from 'react-native-paper';

const SubscriptionScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
      <View style={styles.container}>

        <View style={styles.headerMainView}>
          <View style={styles.headerSecondaryView}>
            <Text style={styles.headerText}> FREE </Text>
          </View>
          <View style={styles.bodyMainView}>
            <Text style={styles.priceText}> $0.00/ month </Text>
            <View style={styles.bodySecondaryView}>
              <Text style={styles.bodyText}> Allows users to respond to one daily question, listen to five responses to one daily...</Text>
            </View>
          </View>
        </View>

        <View style={styles.headerMainView}>
          <View style={styles.headerSecondaryView}>
            <Text style={styles.headerText}> TIER 1 </Text>
          </View>
          <View style={styles.bodyMainView}>
            <Text style={styles.priceText}> $19.00 /month </Text>
            <View style={styles.bodySecondaryView}>
              <Text style={styles.bodyText}> Provides additional features, including responding to five daily questions, listening to...</Text>
            </View>
          </View>
          <Button mode="contained" style={styles.feedbackButton} onPress={() => { console.log('hello'); }}>
            Buy Now
          </Button>
        </View>

        <View style={styles.headerMainView}>
          <View style={styles.headerSecondaryView}>
            <Text style={styles.headerText}> TIER 2 </Text>
          </View>
          <View style={styles.bodyMainView}>
            <Text style={styles.priceText}> $39.00 /month </Text>
            <View style={styles.bodySecondaryView}>
              <Text style={styles.bodyText}> Offers unlimited listening to responses to daily questions, an unlimited number of...</Text>
            </View>
          </View>
          <Button mode="contained" style={styles.feedbackButton} onPress={() => { console.log('hello'); }}>
            Buy Now
          </Button>
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  headerMainView: {
    ...globalStyles.cardContainer,
    padding: 0,
    marginHorizontal: 20,
    width: 'auto',
    borderColor: '#1d6495',
    borderWidth: 2
  },
  headerSecondaryView: {
    backgroundColor: '#1d6495',
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    height: 100,
  },
  headerText: {
    fontSize: 34,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold'
  },
  bodyMainView: {
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    height: 'auto'
  },
  priceText: {
    fontSize: 34,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  bodySecondaryView: {
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 15
  },
  bodyText: {
    fontSize: 18,
    textAlign: 'center',
  },
  feedbackButton: {
    ...globalStyles.fillButton,
    paddingVertical: 0, // Adjust the padding as needed
    fontSize: 20, // Adjust the font size as needed
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    width: 'auto',
  },

});

export default SubscriptionScreen;