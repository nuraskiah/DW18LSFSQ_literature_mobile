import React from 'react';
import Root from './Root';
import { registerRootComponent } from 'expo';

import { ContextProvider } from './src/context/Context';

const App = () => {
  return (
    <ContextProvider>
      <Root />
    </ContextProvider>
  );
};

export default App;
