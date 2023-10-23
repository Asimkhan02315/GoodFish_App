/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit'
import {
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    ROUTE_VALUE,
    UPDATE_PROFILE
} from '../action/authAction';
const initialState = {
    user: {},
    token: null,
    isLogin: false,
    value: null,
};

const authReducer = (state = initialState, action,) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLogin: true,
                user: action.payload,
                token: action.token,
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLogin: false,
                user: null,
                token: null,
            };
        case ROUTE_VALUE:
            return {
                ...state,
                value: action.payload,
            };
        case UPDATE_PROFILE:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload, // Merge updated profile data
                },
            };
        default:
            return state;
    }
};

export default authReducer;