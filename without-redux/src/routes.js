import { lazy } from 'react';
import Home from './views/Home';

const List = lazy(() => import(/* webpackChunkName: "list" */ './views/List'));
const Item = lazy(() => import(/* webpackChunkName: "item" */ './views/Item'));
const NotFound = lazy(() => import(/* webpackChunkName: "not-found" */ './views/NotFound'));

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/(planets|people|films|species)',
    component: List,
    exact: true,
  },
  {
    path: '/(planets|people|films|species)/:id',
    component: Item,
    exact: true,
  },
  {
    path: '*',
    component: NotFound,
    exact: true,
  },
];

export default routes;
