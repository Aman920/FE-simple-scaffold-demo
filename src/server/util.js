import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

import getStore from '../store';
import Router from '../Router';

export const render = (req) => {
	
  const content = renderToString(
		<Provider store={getStore()}>
			<StaticRouter location={req.path} context={{}}>
				<Router />
			</StaticRouter>
		</Provider>
	);
  return (
  	`<html>
			<head>
				<title>hello</title>
			</head>
			<body>
			<div id="root">${content}</div>
			<script src="/client.bundle.js"></script>
			</body>
  	</html>`
  );
}
