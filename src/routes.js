import Home from './containers/Home';
import Login from './containers/Login';

export default [
  {
    path: '/',
    component: Home,
    exact: true,
    key: 'home',
    loadData: Home.loadData,
    // 多级路由处理
    // routes: [{
    //   path: '/test',
    //   component: Login,
    //   exact: true,
    //   key: 'test'
    // }]
  }, {
    path: '/login',
    component: Login,
    exact: true,
    key: 'login'
  }
];
