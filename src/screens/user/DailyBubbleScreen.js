/* eslint-disable prettier/prettier */


import { View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Icon, Text } from 'react-native-paper'
import BubbleSlider from '../../components/BubbleSlider'
import ResponseCard from '../../components/ResponseCard'
const DailyBubbleScreen = () => {

    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                <Text style={styles.Heading}>Good morning, Mark</Text>
                <View>
                    <BubbleSlider />
                </View>
                    <View style={styles.micIcon}>
                        <Icon color='#fff'
                            source="microphone"
                            size={40}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.appHeading}>Today's response</Text>
                    {/* <BubbleList /> */}
                    <ResponseCard />
                    <ResponseCard />
                    <ResponseCard />
                    <ResponseCard />
                    <ResponseCard />
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1d6495',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        marginBottom: 50,
        paddingTop: 20,
        paddingBottom: 80,
        position: 'relative',
    },
    appHeading: {
        paddingHorizontal: 10,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 700
    },
    Heading: {
        paddingHorizontal: 10,
        marginBottom: 5,
        fontSize: 22,
        fontWeight: 700,
        color: '#fff'
    },
    bubbleText: {
        paddingHorizontal: 10,
        marginBottom: 30,
        fontSize: 16,
        color: '#fff'
    },
    micIcon: {
        width: 70,
        height: 70,
        backgroundColor: '#f0443c',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        left: 0,
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: -110,
        marginTop: 10,
    }
});

export default DailyBubbleScreen