/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, } from 'react-native'
import { Switch, Divider, Button, Icon } from 'react-native-paper';
import React, { useState } from 'react'
import globalStyles from '../../utils/_css/globalStyle'
import { AppIcon, AppStyles } from '../../utils/AppStyles';
import FastImage from 'react-native-fast-image';
import { connect } from 'react-redux';
import { showToast, openDialog, closeDialog } from '../../redux/action/commonActions';

const ProfileScreen = ({ showToast, closeDialog, openDialog, hideToast }) => {


    const openCustomDialog = () => {
        const header = 'Custom Header';
        const bodyContent = 'This is your custom dialog content.';
        // const firstButton = 'Open'
        const secondButton = 'Close'
        const onSubmit = () => {
            console.log('Submit button clicked in dialog');
            closeDialog();
        };

        const onClose = () => {
            console.log('Close button clicked in dialog');
        };

        openDialog(header, bodyContent, secondButton, onClose,);
    };

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
                                <Text style={styles.johnWick2}>WebApkTest@1</Text>
                                <Text style={styles.johnWick2}>John Wick</Text>
                                <Text style={styles.johnWick1}>webtest@gmail.com</Text>
                                <Text style={styles.johnWick1}>Male</Text>
                                <View style={{ ...styles.image2Row, gap: 5 }}>
                                    <Text style={styles.johnWickKey}>Age : </Text>
                                    <Text style={styles.johnWick1}>18</Text>
                                </View>
                            </View>

                        </View>

                    </View>
                    <Button
                        mode="contained"
                        style={globalStyles.fillButton}
                        onPress={() => {
                            console.log('Button pressed');
                            showToast('Hello toast here ', 6);
                        }}
                    >
                        Submit
                    </Button>
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
        width: 120,
        height: 120,
        borderRadius: 10
    },
    johnWick2: {
        fontSize: 20,
        fontFamily: "roboto-700",
        color: "#121212",
        fontWeight: 'bold'
    },
    johnWickKey: {
        fontSize: 15,
        color: "#121212",
        fontFamily: "roboto-700",
        fontWeight: 'bold'
    },
    johnWick1: {
        fontSize: 15,
        width: 180
    },
    image2Row: {
        flexDirection: "row",
        gap: 20,
        alignItems: 'center'
    },



})


const mapStateToProps = (state) => {
    return {
        common: state.toast,
    };
};

const mapDispatchToProps = {
    showToast,
    openDialog,
    closeDialog,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);