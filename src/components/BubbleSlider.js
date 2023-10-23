/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Dimensions, Text, StyleSheet, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { Icon } from 'react-native-paper';

const BubbleSlider = () => {

    const width = Dimensions.get('window').width;

    const data = [
        { key: '1', name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', },
        { key: '2', name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
        { key: '3', name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', },
    ];

    const renderItem = ({ item }) => (

        <View style={styles.itemContainer}>
            <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
            </View>
        </View>
    );

    return (
        <View>
            <Carousel
                loop={true}
                mode='parallax'
                width={width}
                height={width / 4}
                autoPlay={false}
                pagingEnabled={true}
                autoPlayInterval={1000}
                data={data}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        marginVertical: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 3,
    },
    itemImage: {
        width: 40,
        height: 40,
        marginRight: 15,
        borderRadius: 5,
    },
    itemDetails: {
        flex: 1,
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemDate: {
        fontSize: 14,
        color: '#888',
    },
    paginationContainer: {
        position: 'absolute',
        bottom: -50,
        alignSelf: 'center',
    },
    paginationDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 8,
        marginBottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.92)',
    },
});

export default BubbleSlider;
