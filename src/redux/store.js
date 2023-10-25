/* eslint-disable prettier/prettier */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './reducers/reducer';
import thunk from 'redux-thunk';

// Redux Persist configuration
const persistConfig = {
    key: 'GoodFish',
    storage: AsyncStorage,
    blacklist: ['common']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const logger = createLogger({
    // ...logger configuration options if needed
});

const middleware = [
    thunk,
    logger,
];

const store = configureStore({
    reducer: persistedReducer,
    middleware: middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);

export { store, persistor };
