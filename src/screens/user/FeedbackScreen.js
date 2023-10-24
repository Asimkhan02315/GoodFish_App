/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet, ScrollView, } from 'react-native';
import React from 'react';
import { Button, RadioButton } from 'react-native-paper';
import globalStyles from '../../utils/_css/globalStyle';
import FormTextInput from '../../components/FormTextInput';
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
const FeedbackScreen = () => {

  const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    subject: yup.string().required('Subject is required'),
    comments: yup.string().required('Comments is required'),
  });
  const formOptions = { resolver: yupResolver(validationSchema), mode: 'onChange' };
  const { control, handleSubmit, formState: { errors } } = useForm(formOptions);
  const onSubmit = (data) => {
    console.log(data, "form data ");
  };


  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled">
      <View style={styles.appContainer}>
        <View style={{
          ...globalStyles.cardContainer, elevation: 10,
          shadowOpacity: 0.10,
          shadowRadius: 5, alignItems: 'start'
        }}>
          {/* <View style={globalStyles.headerContainer}>
            <Text style={globalStyles.headerText} > User Feedback</Text>
          </View> */}
          <View style={styles.inputView}>
            <Text style={styles.inputLabel}> Name : </Text>
            <FormTextInput control={control} name='name' label={'Name'} errors={errors} />
            <Text style={styles.inputLabel}>  Email : </Text>
            <FormTextInput control={control} name='email' label={'Email'} errors={errors} />
            <Text style={styles.inputLabel}>  Subject : </Text>
            <FormTextInput control={control} name='subject' label={'Subject'} errors={errors} />
            <Text style={styles.inputLabel}>  Comments : </Text>
            <FormTextInput control={control} name='comments' multiline={true} numberOfLines={4} label={'Comments'} errors={errors} />
            <Button mode="contained" style={globalStyles.fillButton} onPress={handleSubmit(onSubmit)}>
              Submit
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    marginVertical: 5,
    marginHorizontal: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: "column",

  },
  inputView: {
    paddingVertical: 10,
    marginHorizontal: 10,
    gap: 10,
  },
  inputLabel: {
    fontWeight: 'bold',
    fontSize: 16
  }
})

export default FeedbackScreen