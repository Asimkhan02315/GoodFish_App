/* eslint-disable prettier/prettier */
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, Text, TouchableOpacity } from 'react-native';
import { RadioButton, HelperText } from 'react-native-paper';

const FormRadioButtons = ({ control, error, name }) => {
    return (
        <View style={{ marginVertical: 8 }}>
            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                    <RadioButton.Group onValueChange={onChange} value={value}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <RadioButton.Item label="Male" value="male" color='#ee502c' />
                            <RadioButton.Item label="Female" value="female" color='#ee502c' />
                            <RadioButton.Item label="Non-binary" value="nonBinary" color='#ee502c' />
                        </View>
                        {error && <HelperText type="error" visible={true}> {error.message}</HelperText>}
                    </RadioButton.Group>
                )
                }
            />

        </View >
    );
};

export default FormRadioButtons;

