/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Switch, Divider, Button, Icon, AnimatedFAB, FAB } from 'react-native-paper';
import React, { useState } from 'react'
import globalStyles from '../../utils/_css/globalStyle'
import { AppIcon, AppStyles } from '../../utils/AppStyles';
import FastImage from 'react-native-fast-image';
import { connect } from 'react-redux';
import { showToast, openDialog, closeDialog } from '../../redux/action/commonActions';
import ProfileResponseCard from '../../components/ProfileResponseCard';
import PlayerCard from '../../components/playerCard';
const ProfileScreen = ({ showToast, closeDialog, openDialog, hideToast }) => {

    const [isExtended, setIsExtended] = useState(false)

    const openCustomDialog = () => {
        const header = 'Custom Header';
        const bodyContent = 'This is your custom dialog content.';
        const firstButton = 'Open'
        const secondButton = 'Close'
        const onSubmit = () => {
            console.log('Submit button clicked in dialog');
            closeDialog();
        };

        const onClose = () => {
            console.log('Close button clicked in dialog');
        };

        openDialog(header, bodyContent, secondButton, onClose, firstButton, onSubmit);
    };

    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });

    const { open } = state;

    return (
        <>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
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
                            <PlayerCard playerStyle={{ elevation: 3, marginBottom: 0 }} />
                        </View>
                        {/* <Button
                            onPress={() => { openCustomDialog() }}> text
                        </Button> */}

                        <View style={styles.rect2}>
                            <View>
                                <View style={styles.labelContainer}>
                                    <Text style={styles.label}>Religion:</Text>
                                    <Text style={styles.inputText}>Hinduism</Text>
                                </View>
                                <View style={styles.labelContainer}>
                                    <Text style={styles.label}>Photos:</Text>
                                    <View style={styles.photoList}>
                                        <FastImage
                                            source={AppIcon.images.demoImage}
                                            resizeMode="contain"
                                            style={styles.photos}
                                        ></FastImage>
                                        <FastImage
                                            source={AppIcon.images.demoImage}
                                            resizeMode="contain"
                                            style={styles.photos}
                                        ></FastImage>
                                        <FastImage
                                            source={AppIcon.images.demoImage}
                                            resizeMode="contain"
                                            style={styles.photos}
                                        ></FastImage>
                                        <FastImage
                                            source={AppIcon.images.demoImage}
                                            resizeMode="contain"
                                            style={styles.photos}
                                        ></FastImage>
                                    </View>
                                </View>
                                <View style={styles.labelContainer}>
                                    <Text style={styles.label}>Diet:</Text>
                                    <ScrollView horizontal contentContainerStyle={styles.scrollSection}>
                                        <Text style={styles.scrollLabel}>Diet food</Text>
                                        <Text style={styles.scrollLabel}>Low-carbohydrate diet</Text>
                                    </ScrollView>
                                </View>
                                <View style={styles.labelContainer}>
                                    <Text style={styles.label}>Hobbies:</Text>
                                    <ScrollView horizontal contentContainerStyle={styles.scrollSection}>
                                        <Text style={styles.scrollLabel}>Diet food</Text>
                                        <Text style={styles.scrollLabel}>Low-carbohydrate diet</Text>
                                    </ScrollView>
                                </View>
                                <View style={styles.labelContainer}>
                                    <Text style={styles.label}>Interests:</Text>
                                    <ScrollView horizontal contentContainerStyle={styles.scrollSection}>
                                        <Text style={styles.scrollLabel}>Diet food</Text>
                                        <Text style={styles.scrollLabel}>Low-carbohydrate diet</Text>
                                    </ScrollView>
                                </View>
                                <View style={styles.labelContainer}>
                                    <Text style={styles.label}>Personal Goal:</Text>
                                    <Text style={styles.inputText}>here my story Personal Goal</Text>
                                </View>
                                <View style={styles.labelContainer}>
                                    <Text style={styles.label}>Story:</Text>
                                    <Text style={styles.inputText}>here my story Personal Goal</Text>
                                </View>
                            </View>
                        </View>
                        <ProfileResponseCard />
                    </View>

                </View>
            </ScrollView>

            <FAB.Group
                open={open}
                visible
                color={'#fff'}
                backdropColor={'#ffffff7d'}
                icon={open ? 'close' : 'microphone'}
                actions={[
                    {
                        icon: 'stop-circle-outline',
                        label: '04:04',
                        onPress: () => console.log('Pressed notifications'),
                        color: '#fff',
                        style: { backgroundColor: AppStyles.color.secondaryColor, color: '#fff' },
                        containerStyle: { backgroundColor: AppStyles.color.secondaryColor, color: '#fff' },
                        labelStyle: { color: '#fff' }
                    },
                ]}
                onStateChange={onStateChange}
                onPress={() => {

                }}
                fabStyle={{ backgroundColor: AppStyles.color.primaryColor, }}
            />
        </>
    )
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
        elevation: 10,
        shadowOpacity: 0.19,
        shadowRadius: 10,
        borderRadius: 15,
        padding: 15,
        alignItems: 'start',
        gap: 5,
        marginBottom: 20,
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
    labelContainer: {
        marginBottom: 10
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 2
    },
    photoList: {
        flexDirection: 'row',
        paddingLeft: 10
    },
    photos: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginVertical: 5,
        marginLeft: -10

    },
    scrollSection: {
        gap: 8
    },
    scrollLabel: {
        backgroundColor: AppStyles.color.primaryColor,
        paddingVertical: 3,
        paddingHorizontal: 8,
        color: '#fff',
        borderRadius: 5,
        fontWeight: 'bold'
    },
    questionText: {
        color: '#000',
        fontSize: 14,
    },
    fabStyle: {
        bottom: 16,
        right: 16,
        position: 'absolute',
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