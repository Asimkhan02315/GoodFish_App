/* eslint-disable prettier/prettier */
import React from 'react';
import { Controller } from 'react-hook-form';
import { View, StyleSheet } from 'react-native';
import { RadioButton, Text, Divider, HelperText } from 'react-native-paper';

const FormRadioButtons = ({ control, name, label, options, defaultValue, errors }) => (

    <View>
        <Text>{label} : </Text>
        <Controller
            control={control}
            name={name}
            defaultValue={defaultValue}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <View>
                    <View>
                        {options.slice(0, 2).map((option) => (
                            <RadioButton.Item key={option.value} label={option.label} status={value === option.value ? 'checked' : 'unchecked'} value={option.value} onPress={() => onChange(option.value)} />
                        ))}
                    </View>
                    <View>
                        {options.slice(2).map((option) => (
                            <RadioButton.Item key={option.value} label={option.label} status={value === option.value ? 'checked' : 'unchecked'} value={option.value} onPress={() => onChange(option.value)} />
                        ))}
                    </View>
                    {error && <HelperText type="error" visible={true}>{error.message}</HelperText>}
                </View>
            )}
        />
        <Divider />
    </View>
);

const styles = StyleSheet.create({

});

export default FormRadioButtons;
