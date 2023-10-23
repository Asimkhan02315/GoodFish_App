/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { View, StyleSheet, Pressable, Text, TextInput, Modal, TouchableOpacity } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { formatDateToString } from '../utils/_helpers/format.helper';
import { HelperText } from 'react-native-paper';
import moment from 'moment';

const FormDateInput = ({ control, setValue, name, label, defaultValue, errors }) => {
    const defaultDate = defaultValue || new Date();
    const [selectedDate, setSelectedDate] = useState(new Date(defaultDate));
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisible(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisible(false);
    };

    const handleConfirm = (date) => {
        hideDatePicker();
        if (date) {
            setSelectedDate(date);
            setValue(name, formatDateToString(date));
        }
    };

    return (
        <View style={styles.detailItem}>
            <Pressable onPress={showDatePicker}>
                <TextInput
                    style={styles.input}
                    value={formatDateToString(selectedDate)}
                    editable={false}
                />
            </Pressable>
            <Controller
                control={control}
                name={name}
                defaultValue={formatDateToString(selectedDate)}
                render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                    <View>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                            maximumDate={moment().subtract(16, 'years').toDate()}
                        />
                        {error && <HelperText type="error" visible={true}>{error.message}</HelperText>}
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    detailItem: {
        marginBottom: 10,
        width: '100%',
    },
    labelText: {
        fontSize: 16,
        color: '#777',
        fontWeight: '700',
        marginRight: 10,
        textAlign: 'left',
        paddingBottom: 10,
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

export default FormDateInput;
