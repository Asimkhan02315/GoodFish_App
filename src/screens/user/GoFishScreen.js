import React, { useState, useCallback } from 'react';
import { View, Text, Button } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

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


  return (
    <View>
      <Text>{isRecording ? 'Recording...' : 'Not recording'}</Text>
      <Button
        title={isRecording ? 'Stop Recording' : 'Start Recording'}
        onPress={isRecording ? stopRecording : startRecording}
      />
    </View>
  )
}

export default GoFishScreen