/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Dimensions, Text } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const ParallaxCarousel = () => {
    const width = Dimensions.get('window').width;


    return (
        <Carousel
            loop
            mode={'parallax'}
            width={width}
            height={width / 2}
            autoPlay={true}
            data={[...new Array(6).keys()]}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => console.log('current index:', index)}
            renderItem={({ index }) => (
                <View
                    style={{
                        flex: 1,
                        borderWidth: 1,
                        justifyContent: 'center',
                    }}
                >
                    <Text style={{ textAlign: 'center', fontSize: 30 }}>
                        {index}
                    </Text>
                </View>
            )}
        />
    );
};

export default ParallaxCarousel;
