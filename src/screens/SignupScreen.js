/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native"
import { Button, RadioButton } from 'react-native-paper';
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useState } from "react";
import FastImage from 'react-native-fast-image';
import { AppIcon, AppStyles } from "../utils/AppStyles";

const SignUpScreen = ({ navigation }) => {

  const validationSchema = yup.object().shape({
    name: yup.string().email('Invalid name format')
      .required('Name is required'),
    email: yup.string().email('Invalid email format')
      .required('Email is required'),
    password: yup.string().required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
    age: yup.string().required('Age is required')
      .min(6, 'Age is required'),
  });

  const formOptions = { resolver: yupResolver(validationSchema), mode: 'onChange' };
  const { control, handleSubmit, formState: { errors } } = useForm(formOptions);
  const [checked, setChecked] = useState('first');

  const onSubmit = () => {

  };

  return (
    <View style={styles.container}>
      <View style={styles.containertext}>
        <FastImage style={{ marginBottom: 30, width: 70, height: 70 }} source={AppIcon.images.logo} />
        <Text style={{ fontSize: 30, textAlign: 'left', fontWeight: 700, color: '#000' }}>Create account</Text>
        <Text style={{ fontSize: 18, textAlign: 'left', color: '#888' }}>Please fill the given details</Text>
      </View>
      <Controller
        name="name"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors?.name && <Text style={{ paddingTop: 0, paddingBottom: 15, color: 'red', textAlign: 'left', justifyContent: 'flex-start', width: '100%' }}>{errors?.name?.message}</Text>}

      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors?.email && <Text style={{ paddingTop: 0, paddingBottom: 15, color: 'red', textAlign: 'left', justifyContent: 'flex-start', width: '100%' }}>{errors?.email?.message}</Text>}

      <Controller
        name="age"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Age"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={true}
          />
        )}
      />
      {errors?.age && <Text style={{ paddingTop: 0, paddingBottom: 15, color: 'red', textAlign: 'left', justifyContent: 'flex-start', width: '100%' }}>{errors?.age?.message}</Text>}

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 20, width: '100%' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8, justifyContent: 'space-between' }}>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
            color='#ee502c'
          />
          <Text style={{ fontSize: 18 }}>Male</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8, justifyContent: 'space-between' }}>
          <RadioButton
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
            color='#ee502c'
          />
          <Text style={{ fontSize: 18 }}>Female</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8, justifyContent: 'space-between' }}>
          <RadioButton
            value="second"
            status={checked === 'third' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('third')}
            color='#ee502c'
          />
          <Text style={{ fontSize: 18 }}>Non-binary</Text>
        </View>
      </View>

      <Controller
        name="password"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={true}
          />
        )}
      />
      {errors?.password && <Text style={{ paddingTop: 0, paddingBottom: 15, color: 'red', textAlign: 'left', justifyContent: 'flex-start', width: '100%' }}>{errors?.password?.message}</Text>}

      <Button mode="contained" style={{ width: '100%', paddingVertical: 8, borderRadius: 8, fontSize: 18, backgroundColor: '#ee502c' }} onPress={handleSubmit(onSubmit)}>
        Sign Up
      </Button>

      <Text style={{ textAlign: 'center', width: '100%', fontSize: 18, marginTop: 20 }}>
        Already have an account?   {' '}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
          <Text style={{ color: '#ee502c' }}>Login</Text>
        </TouchableOpacity>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20
  },
  containertext: {
    marginBottom: 50,
    textAlign: 'left',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%'
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
