import { RouteProps } from 'react-router-dom';

export enum RoutesName {
  MAIN = 'MAIN',
  ABOUT = 'ABOUT',
  NOT_FOUND = 'NOT_FOUND'
}

export interface Route {
  name: RoutesName;
  params: RouteProps;
}
