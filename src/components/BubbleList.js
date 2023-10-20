import { View, Text, StyleSheet, FlatList, Image} from 'react-native'
import React from 'react'
import { Icon } from 'react-native-paper';

const BubbleList = () => {

  const data = [
    { key: '1', name: 'Item 1', image: require('../../assets/logo.png'), date: '2023-10-19' },
    { key: '2', name: 'Item 2', image: require('../../assets/logo.png'), date: '2023-10-18' },
    { key: '3', name: 'Item 3', image: require('../../assets/logo.png'), date: '2023-10-17' },
  ];
  const renderItem = ({ item }) => (
    <>
     <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDate}>Date: {item.date}</Text>
      </View>
      <Icon color='#f0443c'
        source="play-circle"
        size={40}
      />
    </View>
    </>
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    width: '95%',
    padding: 20,
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
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
  color:{
    color:"#888"
  }
});

export default BubbleList