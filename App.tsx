/* eslint-disable prettier/prettier */

import React from 'react';
import AppNavigator from "./src/navigator/AppNavigator"
import { store, persister } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
const App = () => {

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persister}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
