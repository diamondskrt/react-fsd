import { lazy } from 'react';
import { ERoutesName, IRoute } from './types';

const IndexPage = lazy(async () => await import('@/pages/main'));
const AboutPage = lazy(async () => await import('@/pages/about'));
const NotFoundPage = lazy(async () => await import('@/pages/404'));

export const routes: IRoute[] = [
  {
    name: ERoutesName.MAIN,
    params: {
      path: '/',
      element: <IndexPage />
    }
  },
  {
    name: ERoutesName.ABOUT,
    params: {
      path: '/about',
      element: <AboutPage />
    }
  },
  {
    name: ERoutesName.NOT_FOUND,
    params: {
      path: '*',
      element: <NotFoundPage />
    }
  }
];
