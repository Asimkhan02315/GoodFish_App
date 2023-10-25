/* eslint-disable prettier/prettier */
// actions/toastActions.js
export const showToast = (message, type = 1,) => {
    return {
        type: 'SHOW_TOAST',
        payload: { type, message },
    };
};

export const hideToast = () => {
    return {
        type: 'HIDE_TOAST',
    };
};

export const openDialog = (header, body, firstButton, onClose, secondButton, onSubmit) => {
    return {
        type: 'OPEN_DIALOG',
        payload: {
            openDialog: true,
            dialogHeader: header,
            dialogBody: body,
            firstButton: firstButton,
            secondButton: secondButton,
            onSubmit,
            onClose,
        },
    };
};

export const closeDialog = () => {
    return {
        type: 'CLOSE_DIALOG',
    };
};