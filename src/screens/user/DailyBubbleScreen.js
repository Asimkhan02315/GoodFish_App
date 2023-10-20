/* eslint-disable prettier/prettier */


import { View, StyleSheet } from 'react-native'
import React from 'react'
import BubbleList from '../../components/BubbleList'
import { Icon, Text } from 'react-native-paper'
import BubbleSlider from '../../components/BubbleSlider'

const DailyBubbleScreen = () => {

    return (
        <>
            <Text style={styles.Heading}>Good morning, Mark</Text>
            <View>
                <Text style={styles.appHeading}>Daily Bubble</Text>
                <BubbleSlider />
            </View>


            <View style={styles.container}>

                <Text style={styles.bubbleText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
                <View style={styles.micIcon}>
                    <Icon color='#fff'
                        source="microphone"
                        size={40}
                    />
                </View>
            </View>
            <View>
                <Text style={styles.appHeading}>Today's response</Text>
                <BubbleList />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1d6495',
        borderBottomRightRadius: 50,  
        borderBottomLeftRadius: 50,
        marginBottom: 50,
        paddingHorizontal: 20,
        paddingTop: 30,
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
        marginBottom: 20,
        fontSize: 22,
        fontWeight: 700,
        color: '#1d6495'
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