import React from 'react';
import App from './App';
import { registerRootComponent } from 'expo';

import { ContextProvider } from './src/context/Context';

const Root = () => {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  );
};

export default Root;
