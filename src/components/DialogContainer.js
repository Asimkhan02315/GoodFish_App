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
            <Dialog style={{ borderRadius: 15, padding: 0, backgroundColor: '#fff' }} visible={common?.openDialog} onDismiss={hideDialog}>
                <Dialog.Title style={{ fontWeight: 'bold', margin: 0, padding: 0 }}>{common?.dialogHeader}</Dialog.Title>
                <Dialog.Content>
                    <Text style={{ fontSize: 15 }}>{common?.dialogBody}</Text>
                </Dialog.Content>
                <Dialog.Actions>
                    {common && common?.firstButton && (<Button mode="contained" style={{ paddingHorizontal: 15 }} buttonColor={AppStyles.color.primaryColor} onPress={() => { common?.onClose(); hideDialog() }}> {common?.firstButton}</Button>)}
                    {common && common?.secondButton && (<Button mode="contained" style={{ paddingHorizontal: 15 }} buttonColor={AppStyles.color.primaryColor} Press={() => common?.onSubmit()}>{common?.secondButton}</Button>)}
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

