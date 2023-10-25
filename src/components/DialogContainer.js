/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Dialog, Portal, Text } from 'react-native-paper';
import { connect } from 'react-redux';
import { AppStyles } from '../utils/AppStyles';
import { closeDialog } from '../redux/action/commonActions';
const DialogContainer = ({ common, closeDialog }) => {

    const hideDialog = () => {
        closeDialog();
    };

    return (

        <Portal>
            <Dialog visible={common?.openDialog} onDismiss={hideDialog}>
                <Dialog.Title>{common?.dialogHeader}</Dialog.Title>
                <Dialog.Content>
                    <Text variant="bodyMedium">{common?.dialogBody}</Text>
                </Dialog.Content>
                <Dialog.Actions>
                    {common && common?.firstButton && (<Button onPress={() => { common?.onClose(); hideDialog() }}> {common?.firstButton}</Button>)}
                    {common && common?.secondButton && (<Button Press={() => common?.onSubmit()}>{common?.secondButton}</Button>)}
                </Dialog.Actions>
            </Dialog>
        </Portal >
    );
};

const styles = StyleSheet.create({

});

const mapStateToProps = (state) => {
    return {
        common: state.common,
    };
};

const mapDispatchToProps = {
    closeDialog,
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogContainer);

