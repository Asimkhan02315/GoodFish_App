/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, } from 'react-native'
import { Switch, Divider, Button, Icon } from 'react-native-paper';
import React, { useState } from 'react'
import globalStyles from '../../utils/_css/globalStyle'
import { AppIcon, AppStyles } from '../../utils/AppStyles';
import FastImage from 'react-native-fast-image';

const NotificationScreen = () => {


    return (
        <View contentContainerStyle={{ flexGrow: 1 }} >
            <View style={styles.appContainer}>
                <View style={styles.container}>
                    <View style={styles.rect2}>
                        <View style={styles.image2Row}>
                            <FastImage
                                source={AppIcon.images.demoImage}
                                resizeMode="contain"
                                style={styles.image2}
                            ></FastImage>
                            <View>
                                <Text style={styles.johnWick2}>John Wick</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <Icon
                                source="check-circle-outline"
                                color={'#1d6495'}
                                size={40}
                            />
                            <Icon
                                source="close-circle-outline"
                                color={'#ee502c'}
                                size={40}
                            />
                        </View>
                    </View>
                </View>



                <View style={styles.container}>
                    <View style={styles.rect2}>
                        <View style={styles.image2Row}>
                            <FastImage
                                source={AppIcon.images.demoImage}
                                resizeMode="contain"
                                style={styles.image2}
                            ></FastImage>
                            <View>
                                <Text style={styles.johnWick2}>John Wick</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <Icon
                                source="check-circle-outline"
                                color={'#1d6495'}
                                size={40}
                            />
                            <Icon
                                source="close-circle-outline"
                                color={'#ee502c'}
                                size={40}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={styles.rect2}>
                        <View style={styles.image2Row}>
                            <FastImage
                                source={AppIcon.images.demoImage}
                                resizeMode="contain"
                                style={styles.image2}
                            ></FastImage>
                            <View>
                                <Text style={styles.johnWick2}>John Wick</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <Icon
                                source="check-circle-outline"
                                color={'#1d6495'}
                                size={40}
                            />
                            <Icon
                                source="close-circle-outline"
                                color={'#ee502c'}
                                size={40}
                            />
                        </View>
                    </View>
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
        elevation: 10,
        shadowOpacity: 0.19,
        shadowRadius: 10,
        borderRadius: 15,
        flexDirection: "column",
        padding: 10,
        gap: 10,
    },
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
    johnWick2: {
        fontFamily: "roboto-700",
        color: "#121212",
        fontWeight: 'bold'
    },
    image2Row: {
        flexDirection: "row",
        flex: 1,
        gap: 10,
        alignItems: 'center'
    },
    feedbackButton: {
        ...globalStyles.fillButton,
        paddingVertical: 0,
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
        width: 'auto',
    },

})

export default NotificationScreen;