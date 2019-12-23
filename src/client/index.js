import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import getStore from '../store';
import Routes from '../Router';

const App = () => {
  return (
    <Provider store={getStore()}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

ReactDom.render(<App />, document.getElementById('root'));
