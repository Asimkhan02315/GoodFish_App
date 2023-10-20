import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'
const Bookmarks = () => {
    return (
        <View>
            <Text style={styles.appHeading}>No Bookmarks..</Text>
            <Text style={styles.bubbleText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    appHeading: {
        paddingHorizontal: 10,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 700
    },
    bubbleText: {
        paddingHorizontal: 10,
        marginBottom: 30,
        fontSize: 16,
     
    },
});

export default Bookmarks