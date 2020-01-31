import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter,Route } from 'react-router-dom';

import { getClientStore } from '../store';
import routes from '../routes';

const store = getClientStore();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <div>
					{
						routes.map(route => {
							return <Route {...route} />
						})
					}
				</div>
      </BrowserRouter>
    </Provider>
  );
}

ReactDom.render(<App />, document.getElementById('root'));
