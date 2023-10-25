/* eslint-disable prettier/prettier */
// ToastComponent.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Snackbar, Portal, Icon } from 'react-native-paper';
import { connect } from 'react-redux';
import { hideToast } from '../redux/action/commonActions';
import { AppStyles } from '../utils/AppStyles';

const ToastContainer = ({ toast, hideToast }) => {
    const onDismiss = () => {
        hideToast();
    };

    return (
        <Portal>
            <Snackbar
                style={toast.type === 1 ? styles.toastSuccess : styles.toastError}
                visible={toast?.visible}
                onDismiss={() => onDismiss()}
                duration={3000}
                icon={'close-circle'}
                onIconPress={onDismiss}
            >
                <View style={styles.toastContent}>
                    <Icon
                        source={toast.type === 1 ? 'check' : 'alert'}
                        size={30}
                        color="#fff"
                    />
                    <Text style={styles.toastMessage}>
                        {toast?.message}
                    </Text>
                </View>
            </Snackbar>
        </Portal >
    );
};

const styles = StyleSheet.create({
    toastSuccess: {
        backgroundColor: AppStyles.color.secondaryColor,
    },
    toastError: {
        backgroundColor: AppStyles.color.primaryColor,
    },
    toastContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    toastMessage: {
        fontSize: 16, // Increase text size
        color: '#fff',
    },
});

const mapStateToProps = (state) => {
    return {
        toast: state.common,
    };
};

const mapDispatchToProps = {
    hideToast,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToastContainer);
