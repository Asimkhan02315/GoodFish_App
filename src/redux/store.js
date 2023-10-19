/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit'
import authReducers from './reducers/authReducers'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, authReducers)

export const store = configureStore({
    reducer: {
        auth: persistedReducer,
    },
});
export const persister = persistStore(store)