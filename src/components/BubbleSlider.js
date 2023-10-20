import React from 'react';
import { View,Dimensions, Text, StyleSheet, Image } from 'react-native';
// import Carousel, { Pagination } from 'react-native-snap-carousel';
import Carousel from 'react-native-reanimated-carousel';
import { Icon } from 'react-native-paper';

const BubbleSlider = ( ) => {
    const width = Dimensions.get('window').width;
    const data = [
        { key: '1', name: 'Item 1', image: require('../../assets/logo.png'), date: '2023-10-19' },
        { key: '2', name: 'Item 2', image: require('../../assets/logo.png'), date: '2023-10-18' },
        { key: '3', name: 'Item 3', image: require('../../assets/logo.png'), date: '2023-10-17' },
    ];

    const carouselRef = React.useRef(null);
    const [activeSlide, setActiveSlide] = React.useState(0); 

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDate}>Date: {item.date}</Text>
            </View>
            <Icon color='#f0443c' icon="play-circle" size={40} />
        </View>
    );

    // React.useEffect(() => {
    //     const autoplayTimer = setInterval(() => {
    //         if (carouselRef.current) {
    //             carouselRef.current.snapToNext();
    //         }
    //     }, 1000);

    //     return () => {
    //         clearInterval(autoplayTimer);
    //     };
    // }, []);

    return (
        <View>
           <Carousel
                loop={true}
                mode='parallax'
                width={width}
                height={width / 4}
                autoPlay={false}
                pagingEnabled={true}
                autoPlayInterval={2000}
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
        marginBottom:0,
        backgroundColor: 'rgba(0, 0, 0, 0.92)',
    },
});

export default BubbleSlider;
