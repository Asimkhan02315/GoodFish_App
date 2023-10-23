/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';
const Accordion = ({ title, content }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)} style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                {/* <Divider style={{ height: 2, }} /> */}
            </TouchableOpacity>
            {isExpanded && <View style={styles.content}>{content}</View>}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        marginBottom: 10,
    },
    header: {
        backgroundColor: '#eee',
        padding: 16,

    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    content: {
        padding: 16,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderTopWidth: 0,
    },
});

export default Accordion;