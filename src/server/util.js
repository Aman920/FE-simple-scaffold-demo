import React from 'react';
import { StaticRouter, Route } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';


// render方法专注于拼接content
export const render = (req, store, routes) => {
	const content = renderToString(
		<Provider store={store}>
			<StaticRouter location={req.path} context={{}}>
				<div>
					{
						routes.map(route => {
							return <Route {...route} />
						})
					}
				</div>
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
			<script>window.context={
				state: ${JSON.stringify(store.getState())}
			}</script>
			<script src="/index.js"></script>
			</body>
		</html>`
	);
}
