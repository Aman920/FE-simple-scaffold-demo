import express from 'express';
import { matchRoutes } from 'react-router-config';
import { render } from './util';
import { getStore } from '../store';
import routes from '../routes';
const app = express();

app.use(express.static('public'));

app.get('*', function (req, res) {
  const store = getStore();

	// 根据路由加数据（使用matchRoutes实现多级路由匹配，而不用react-router-dom的matchPath只能匹配一层）
	const matchedRoutes = matchRoutes(routes, req.path);
	const  promises = [];
	matchedRoutes.forEach(val => {
		if (val.route.loadData) {
			promises.push(val.route.loadData(store));
		}
	});
	Promise.all(promises).then(() => {
    res.send(render(req, store, routes));
  });
});

var server = app.listen(3000);
