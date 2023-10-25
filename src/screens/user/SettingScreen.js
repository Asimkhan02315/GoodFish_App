/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Switch, Divider } from 'react-native-paper';
import React, { useState } from 'react'
import globalStyles from '../../utils/_css/globalStyle'
import { AppStyles } from '../../utils/AppStyles'
const SettingScreen = ({ navigation }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
      <View style={styles.appContainer}>
        <View style={{ paddingVertical: 10, marginHorizontal: 10 }}>
          <View style={styles.listView}>
            <Text style={styles.listText}> Push Notifications </Text>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={'#1d6495'} />
          </View>
          <Divider />
          <View style={styles.listView}>
            <Text style={styles.listText}> Profile visible </Text>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={'#1d6495'} />
          </View>
          <Divider style={{ height: 1 }} />
          <TouchableOpacity onPress={() => { navigation.navigate('BlockUsers') }}>
            <View style={styles.listView} >
              <Text style={styles.listText}> Block users </Text>
              {/* <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={'#1d6495'} /> */}
            </View>
          </TouchableOpacity>
          <Divider style={{ height: 1 }} />
        </View>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    marginVertical: 20,
    marginHorizontal: 20,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 1,
      height: 1
    },
    elevation: 10,
    shadowOpacity: 0.10,
    shadowRadius: 5,
    borderRadius: 15,
    flexDirection: "column",
    padding: 10,
    gap: 10,
  },
  listView: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingVertical: 5,
    marginVertical: 5,

  },
  listText: {
    fontSize: 16,
    fontWeight: 'bold',
  }
})

export default SettingScreen