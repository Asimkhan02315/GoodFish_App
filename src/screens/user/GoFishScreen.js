/* eslint-disable prettier/prettier */
import React, { useState, useCallback } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import globalStyles from '../../utils/_css/globalStyle';
import ParallaxCarousel from '../../components/ParallaxCarousel';

const GoFishScreen = () => {


  const audioRecorderPlayer = new AudioRecorderPlayer();
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = useCallback(async () => {
    try {
      await audioRecorderPlayer.startRecorder();
      setIsRecording(true);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const stopRecording = useCallback(async () => {
    try {
      const filePath = await audioRecorderPlayer.stopRecorder();
      setIsRecording(false);
      console.log('Recording saved to', filePath);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const data = [
    { title: 'Slide 1' },
    { title: 'Slide 2' },
    { title: 'Slide 3' },
  ];


  return (
    <View>
      <Text>{isRecording ? 'Recording...' : 'Not recording'}</Text>
      <Button
        title={isRecording ? 'Stop Recording' : 'Start Recording'}
        onPress={isRecording ? stopRecording : startRecording}
      />
      <View style={globalStyles.cardContainer}>

        <Text> App here </Text>
      </View>
      <View style={styles.container}>
        <ParallaxCarousel />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default GoFishScreen