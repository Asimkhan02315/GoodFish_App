/* eslint-disable prettier/prettier */

import React from 'react';
import AppNavigator from "./src/navigator/AppNavigator"
import { store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import ToastContainer from './src/components/ToastContainer';
import DialogContainer from './src/components/DialogContainer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
const App = () => {

  return (
    <>
      <SafeAreaProvider>
        <PaperProvider>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <AppNavigator />
              <DialogContainer />
              <ToastContainer />
            </PersistGate>
          </Provider>
        </PaperProvider>
      </SafeAreaProvider>
    </>
  )
}

export default App
