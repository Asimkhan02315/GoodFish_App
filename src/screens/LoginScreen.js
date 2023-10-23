/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Button } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import { AppIcon, AppStyles } from "../utils/AppStyles";
import FormTextInput from "../components/FormTextInput";
import { connect } from "react-redux";
import globalStyles from "../utils/_css/globalStyle";
import { loginAction } from '../redux/action/authAction'

const LoginScreen = ({ navigation, login }) => {

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
    const onSubmit = (data) => {
        console.log(data, "form data ");
        navigation.navigate('DrawerStack');
        login(data.email, { name: 'Stark' });
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled">
            <View style={globalStyles.centerContainer}>
                <View style={globalStyles.containerText}>
                    <FastImage style={styles.logo} source={AppIcon.images.logo} />
                    <Text style={{ ...styles.welcomeText, fontWeight: 700 }}>Welcome back</Text>
                    <Text style={styles.infoText}>Please fill the given details</Text>
                </View>
                <FormTextInput control={control} name='email' label={'Email'} errors={errors} />
                <FormTextInput control={control} name='password' label={'Password'} errors={errors} />

                <Button mode="contained" style={globalStyles.fillButton} onPress={handleSubmit(onSubmit)}>
                    Login
                </Button>
                <Text style={styles.linkText}>
                    Don't have an account?  {' '}
                    <TouchableOpacity
                        style={{ padding: 0 }}
                        onPress={() => {
                            navigation.navigate('SignupScreen');
                        }}
                    >
                        <Text style={{ color: '#ee502c' }}>SignUp</Text>
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
});

const mapStateToProps = (state) => ({
    user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
    login: (response, token) => dispatch(loginAction(response, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
