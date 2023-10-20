import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.goodMorningMark}>Good Morning Mark</Text>
        <View style={styles.loremIpsumStack}>
          <Text style={styles.loremIpsum}></Text>
          <Text style={styles.loremIpsum2}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </Text>
          <TouchableOpacity style={styles.button}>
            <View style={styles.recordStack}>
              <Text style={styles.record}>Record</Text>
              <TouchableOpacity style={styles.button2}>
                <Text style={styles.record2}>Record</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    width: '100%',
    height: 306,
    backgroundColor: "rgba(196,10,10,1)",
    borderBottomRightRadius: 45,
    borderBottomLeftRadius: 45
  },
  goodMorningMark: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 71,
    marginLeft: 22
  },
  loremIpsum: {
    top: 6,
    left: 1,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  loremIpsum2: {
    top: 0,
    left: 1,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 115,
    width: 333
  },
  button: {
    top: 104,
    width: 333,
    height: 45,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 21,
    left: 0
  },
  record: {
    top: 11,
    left: 138,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 18
  },
  button2: {
    top: 0,
    width: 333,
    height: 45,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 21,
    left: 0
  },
  record2: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 18,
    marginTop: 11,
    marginLeft: 138
  },
  recordStack: {
    width: 333,
    height: 45
  },
  loremIpsumStack: {
    width: 334,
    height: 149,
    marginTop: 26,
    marginLeft: 21
  }
});

export default Untitled;
