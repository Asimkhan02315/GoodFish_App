/* eslint-disable prettier/prettier */
// reducers/toastReducer.js
const initialState = {
    message: '',
    type: 1,
    visible: false,
    openDialog: false,
    dialogHeader: '',
    dialogBody: '',
    firstButton: '',
    secondButton: '',
    onSubmit: null,
    onClose: null,
};

const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_TOAST':
            return {
                ...state,
                type: action.payload.type,
                message: action.payload.message,
                visible: true,
            };
        case 'HIDE_TOAST':
            return {
                ...state,
                visible: false,
            };
        case 'OPEN_DIALOG':
            return {
                ...state,
                ...action.payload,
            };
        case 'CLOSE_DIALOG':
            return {
                ...state,
                openDialog: false,
                dialogHeader: '',
                dialogBody: '',
                onSubmit: null,
                onClose: null,
            };
        default:
            return state;
    }
};

export default commonReducer;
