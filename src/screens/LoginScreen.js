/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Button } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
// import CheckBox from '@react-native-community/checkbox';
import { useState } from "react";
import { AppIcon, AppStyles } from "../utils/AppStyles";
import FormTextInput from "../components/FormTextInput";
const LoginScreen = ({ navigation }) => {

    const validationSchema = yup.object().shape({
        email: yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
    });


    const formOptions = { resolver: yupResolver(validationSchema), mode: 'onChange' };
    const { control, handleSubmit, formState: { errors } } = useForm(formOptions);

    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const onSubmit = () => {

    };

    return (
        <>
            <View style={styles.container}>
                <View style={styles.containertext}>
                    <FastImage style={{ marginBottom: 30, width: 70, height: 70 }} source={AppIcon.images.logo} />
                    <Text style={{ fontSize: 30, textAlign: 'left', fontWeight: 700, color: '#000' }}>Welcome back</Text>
                    <Text style={{ fontSize: 18, textAlign: 'left', color: '#888' }}>Please fill the given details</Text>
                </View>
                <FormTextInput control={control} name='email' label={'Email'} errors={errors} />
                <FormTextInput control={control} name='password' label={'Password'} errors={errors} />

                <Button mode="contained" style={{ width: '100%', paddingVertical: 8, borderRadius: 8, fontSize: 18, backgroundColor: '#ee502c' }} onPress={handleSubmit(onSubmit)}>
                    Login
                </Button>

                {/* <View>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Text>Remember me</Text>
                </View> */}


                <Text style={{ textAlign: 'center', width: '100%', fontSize: 18, marginTop: 20 }}>
                    Don't have an account?  {' '}
                    <TouchableOpacity
                        style={{ padding: 0 }}
                        onPress={() => {
                            navigation.navigate('SignupScreen');
                        }}
                    >
                        <Text style={{ color: '#ee502c', }}>Signup</Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </>
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
        borderRadius: 8
    },

});

export default LoginScreen;