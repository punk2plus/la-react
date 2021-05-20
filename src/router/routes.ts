import { RouteConfig } from 'react-router-config';
import PageA from '../pages/pageA';
import PageB from '../pages/pageB';
import PageC from '../pages/pageC';

const routes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: PageA
  },
  {
    path: '/a',
    exact: true,
    component: PageA
  },
  {
    path: '/b',
    exact: true,
    component: PageB
  },
  {
    path: '/c',
    exact: true,
    component: PageC
  }
];

export default routes;
