import { RouteProps } from 'react-router-dom';

export enum ERoutesName {
  MAIN = 'MAIN',
  ABOUT = 'ABOUT',
  NOT_FOUND = 'NOT_FOUND'
}

export interface IRoute {
  name: ERoutesName;
  params: RouteProps;
}
