import { lazy } from 'react';
import { RoutesName, Route } from './types';

const IndexPage = lazy(async () => await import('@/pages/main'));
const AboutPage = lazy(async () => await import('@/pages/about'));
const NotFoundPage = lazy(async () => await import('@/pages/404'));

export const routes: Route[] = [
  {
    name: RoutesName.MAIN,
    params: {
      path: '/',
      element: <IndexPage />
    }
  },
  {
    name: RoutesName.ABOUT,
    params: {
      path: '/about',
      element: <AboutPage />
    }
  },
  {
    name: RoutesName.NOT_FOUND,
    params: {
      path: '*',
      element: <NotFoundPage />
    }
  }
];
