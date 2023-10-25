/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Icon, } from 'react-native-paper';
import { AppStyles } from "../utils/AppStyles";

function ProfileResponseCard({ cardStyle, openCustomDialog }) {
    return (
        <View style={styles.container}>
            <View style={{ padding: 5 }}>
                <Text style={{ padding: 5, color: '#000', fontSize: 14 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                <View style={[styles.rect2, cardStyle]}>
                    <View style={styles.image2Row}>
                        <Image
                            source={require("../../assets/images.jpg")}
                            resizeMode="contain"
                            style={styles.image2}
                        ></Image>
                        <View>
                            <Text style={styles.text}>00:00 / 2:30</Text>
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
            <View style={{ padding: 5 }}>
                <Text style={{ padding: 5, color: '#000', fontSize: 14 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                <View style={[styles.rect2, cardStyle]}>
                    <View style={styles.image2Row}>
                        <Image
                            source={require("../../assets/images.jpg")}
                            resizeMode="contain"
                            style={styles.image2}
                        ></Image>
                        <View>
                            <Text style={styles.text}>00:00 / 2:30</Text>
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
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
    },
    rect2: {
        width: '100%',
        backgroundColor: "rgba(255,255,255,1)",
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 1,
            height: 1
        },
        elevation: 3,
        shadowOpacity: 0.19,
        shadowRadius: 10,
        borderRadius: 15,
        flexDirection: "row",
        padding: 10,
        alignItems: 'center',
        gap: 10
    },
    image2: {
        width: 50,
        height: 50,
        borderRadius: 10
    },
    text: {
        fontFamily: "roboto-regular",
        color: "#000",
        fontSize: 15,
        marginTop: 5,
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

export default ProfileResponseCard;
