/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Accordion from '../../components/Accordion'
import globalStyles from '../../utils/_css/globalStyle';
import React, { useState } from 'react';
import { AccordionList } from 'accordion-collapse-react-native';
import { Icon, Divider } from 'react-native-paper';
import { AppStyles } from '../../utils/AppStyles';

const SupportScreen = () => {
  const [list, setList] = useState([
    {
      id: 1,
      title: 'Popular articles',
      body: `This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.`
    },
    {
      id: 2,
      title: 'Fix problems & request removals',
      body: `This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.`,
    },
    {
      id: 3,
      title: 'Browse the web',
      body: `This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.`
    },
    {
      id: 4,
      title: 'Search on your phone or tablet',
      body: `This is the fourth item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.`
    },
    {
      id: 5,
      title: 'Search table content on web',
      body: `This is the fivth item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.`
    },
  ]);

  const _head = (item, index, isActive) => (
    <View style={styles.header}>
      <Text style={[styles.title, isActive ? { color: '#ff5a66' } : null]}>{item.title}</Text>
      <Icon
        source={isActive ? 'chevron-up' : 'chevron-down'}
        size={20}
        color={isActive ? '#ff5a66' : "#333"}
      />
    </View>
  );

  const _body = (item) => (
    <View style={{ padding: 10, backgroundColor: '#eee' }}>
      <Text style={{ fontSize: 14, fontWeight: 500, textAlign: 'justify', lineHeight: 25 }}>{item.body}</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
      <View style={styles.appContainer}>
        <View style={{ ...globalStyles.cardContainer, backgroundColor: AppStyles.color.tint, alignItems: 'start' }}>
          <Text style={{ color: '#fff', fontSize: 17, fontWeight: 600, textAlign: 'left' }}> How can we help you?</Text>
        </View>
        <AccordionList
          list={list}
          header={_head}
          body={_body}
          keyExtractor={(item) => `${item.id}`}
          expandedIndex={0}
        />
      </View>
    </ScrollView >
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
    elevation: 30,
    shadowOpacity: 0.19,
    shadowRadius: 10,
    borderRadius: 15,
    flexDirection: "column",
    padding: 10,
    gap: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
  },

})

export default SupportScreen