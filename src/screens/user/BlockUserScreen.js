/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, } from 'react-native'
import { Switch, Divider } from 'react-native-paper';
import React, { useState } from 'react'
import globalStyles from '../../utils/_css/globalStyle'
import { AppStyles } from '../../utils/AppStyles'

const BlockUserScreen = () => {


    return (
        <View contentContainerStyle={{ flexGrow: 1 }} >
            <View style={styles.appContainer}>
                <View style={globalStyles.headerContainer}>
                    <Text style={globalStyles.headerText} > Settings</Text>
                </View>
                <View style={{ paddingVertical: 10, marginHorizontal: 10 }}>
                    <View style={styles.listView}>
                        <Text style={styles.listText}> Push Notifications </Text>
                    </View>
                    <Divider />

                </View>

            </View>
        </View>
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
        elevation: 30,
        shadowOpacity: 0.19,
        shadowRadius: 10,
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

export default BlockUserScreen;