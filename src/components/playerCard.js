/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, { useState, } from "react";
import { StyleSheet, View, Image, Text, Animated, Easing } from "react-native";
import { Icon } from 'react-native-paper';
import { AppIcon, AppStyles } from "../utils/AppStyles";
import FastImage from 'react-native-fast-image';

function PlayerCard() {
    return (
        <View style={styles.container}>
            <View style={styles.rect2}>
                <View style={styles.image2Row}>
                    <Icon
                        source='play-circle'
                        color='#1d6495'
                        style={styles.icon9}
                        size={50}
                    />
                    <View>
                        <Text style={styles.text}>00:00 / 02:30</Text>
                    </View>
                </View>
                <FastImage style={styles.logo} resizeMode={FastImage.resizeMode.cover} source={AppIcon.images.wave} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10
    },
    logo: {
        width: '40%',
        height: 30,
        marginRight: 10
    },
    rect2: {
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
        borderRadius: 50,
        flexDirection: "row",
        padding: 5,
        alignItems: 'center',
        gap: 10,
        marginBottom: 20,
    },
    text: {
        fontFamily: "roboto-regular",
        color: "#000",
        fontSize: 14,
        fontWeight: 'bold'
    },
    icon9: {
        color: "rgba(29,100,149,1)",
        fontSize: 30,
    },
    image2Row: {
        flexDirection: "row",
        flex: 1,
        gap: 10,
        alignItems: 'center'
    }
});

export default PlayerCard;
