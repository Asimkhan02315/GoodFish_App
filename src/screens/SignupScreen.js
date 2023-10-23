/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import { Text, View, TextInput, StyleSheet, TouchableOpacity, ScrollView } from "react-native"
import { Button, RadioButton } from 'react-native-paper';
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useState } from "react";
import FastImage from 'react-native-fast-image';
import { AppIcon, AppStyles } from "../utils/AppStyles";
import FormTextInput from "../components/FormTextInput";
import FormDateInput from "../components/FormDateInput";
import globalStyles from "../utils/_css/globalStyle";
import FormRadioButtons from "../components/FormRadioButtons";

const SignUpScreen = ({ navigation }) => {
  const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email format')
      .required('Email is required'),
    password: yup.string().required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
    age: yup.string().required('Age is required'),
    gender: yup.string().required('gender is required')
  });

  const formOptions = { resolver: yupResolver(validationSchema), mode: 'onChange' };
  const { control, setValue, handleSubmit, formState: { errors } } = useForm(formOptions);
  const [checked, setChecked] = useState('first');

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled">
      <View style={globalStyles.centerContainer}>
        <View style={globalStyles.containerText}>
          <FastImage style={styles.logo} source={AppIcon.images.logo} />
          <Text style={{ ...styles.welcomeText, fontWeight: 700 }}>Create account</Text>
          <Text style={styles.infoText}>Please fill the given details</Text>
        </View>
        <FormTextInput control={control} name='name' label={'Name'} errors={errors} />
        <FormTextInput control={control} name='email' label={'Email'} errors={errors} />
        <FormDateInput control={control} setValue={setValue} name='age' label={'Age'} defaultValue={new Date()} errors={errors} />
        <FormRadioButtons control={control} error={errors} name='gender' />

        <FormTextInput control={control} name='password' label={'Password'} errors={errors} password={true} />

        <Button mode="contained" style={globalStyles.fillButton} onPress={handleSubmit(onSubmit)}>
          Sign Up
        </Button>
        <Text style={styles.linkText}>
          Already have an account?   {' '}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}
          >
            <Text style={{ color: '#ee502c' }}>Login</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  logo: {
    marginBottom: 30,
    width: 70,
    height: 70,
  },
  welcomeText: {
    fontSize: 30,
    textAlign: 'left',
    color: '#000',
  },
  infoText: {
    fontSize: 18,
    textAlign: 'left',
    color: '#888'
  },
  linkText: {
    textAlign: 'center',
    width: '100%',
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
  },


});

export default SignUpScreen;
