import React from 'react';
import { Provider } from 'react-redux';

function TestProviders({children, store}) {
    return (
        <Provider store={store}>
          {children}
        </Provider>
      );
}

export default TestProviders;
