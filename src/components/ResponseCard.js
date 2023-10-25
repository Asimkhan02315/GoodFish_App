/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Icon } from 'react-native-paper';
import { AppStyles } from "../utils/AppStyles";
function ResponseCard({ cardStyle, }) {
    return (
        <View style={styles.container}>
            <View style={[styles.rect2, cardStyle]}>
                <View style={styles.image2Row}>
                    <Image
                        source={require("../../assets/images.jpg")}
                        resizeMode="contain"
                        style={styles.image2}
                    ></Image>
                    <View>
                        <Text style={styles.johnWick2}>John Wick</Text>
                        <Text style={styles.text}>20 oct 2023 | 2:30 min</Text>
                        <View style={{ flexDirection: 'row', marginTop: 10, gap: 10, marginBottom: 10 }}>
                            <Icon
                                source='thumb-up'
                                color={AppStyles.color.primaryColor}
                                style={styles.icon9}
                                size={20}
                            />

                            <Icon
                                source='thumb-down'
                                color={AppStyles.color.primaryColor}
                                style={styles.icon11}
                                size={20}
                            />
                            <Icon
                                source='bookmark'
                                color={AppStyles.color.primaryColor}
                                style={styles.icon12}
                                size={20}
                            />
                        </View>
                    </View>
                </View>
                <Icon
                    source='play-circle'
                    color='#1d6495'
                    style={styles.icon9}
                    size={50}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10
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
        borderRadius: 15,
        flexDirection: "row",
        padding: 10,
        alignItems: 'center',
        gap: 10
    },
    image2: {
        width: 70,
        height: '100%',
        borderRadius: 10
    },
    johnWick2: {
        fontFamily: "roboto-700",
        color: "#121212",
    },
    text: {
        fontFamily: "roboto-regular",
        color: "rgba(150,150,150,1)",
        fontSize: 10,
        marginTop: 5,
    },
    icon10: {
        color: "rgba(128,128,128,1)",
        fontSize: 18,
    },
    icon11: {
        color: "rgba(128,128,128,1)",
        fontSize: 18,
    },
    icon12: {
        color: "rgba(128,128,128,1)",
        fontSize: 18,
    },
    icon9: {
        color: "rgba(29,100,149,1)",
        fontSize: 30,
    },
    image2Row: {
        height: 70,
        flexDirection: "row",
        flex: 1,
        gap: 10
    }
});

export default ResponseCard;
